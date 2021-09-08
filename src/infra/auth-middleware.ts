/**
 * Configure passport strategies for authorization
 */

import httpStatus from 'http-status';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import {UserRole} from './db';
import {findUser} from '../api/controllers/user.controller';
import { CONFIG } from './config/vars';

const jwtOptions = {
  secretOrKey: CONFIG.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
};

async function jwtCb(payload, done) {
  try {
    const user = await findUser(payload.sub);
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtCb);

/**
* Callback function called after JWT validation by passport
 */
function postJWTAuthorization(req, res, next, roles) {
  async function innFn(err, user, info) {
    console.log('is this called  adfsd?');
    console.log(err);
    console.log(info);
    // This middleware will be called after passport.authenticate, so req.login will
    // be available to start a session
      try {
        if (err || !user) throw err;
        // TODO: Understand what this does
        await req.logIn(user, { session: false });
        console.log('user here is', req.user);
      } catch (e) {
        console.log('error caught here');
         next(err);
         return;
      }
      checkRoleAccess(roles, user.role);
      req.user = user;
      next();
  }
  return innFn;
}

function checkRoleAccess(allowedRoles, userRole) {
  // if (UserRole[userRole])
  console.log(allowedRoles);
  console.log(userRole);
  return true;
}

/**
* Authorization factory function that returns another function to help authorize
* using the configured jwt strategy
 */
export function authorize(roles) {
  function authedFn(req, res, next) {
    console.log('is this called ?');
    return passport.authenticate('jwt', {session: false}, postJWTAuthorization(req, res, next, roles))(req, res, next);
  }
  return authedFn;
}