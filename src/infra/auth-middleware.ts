/**
 * Configure passport strategies for authorization.  Here we use JWT
 */

import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { CONFIG } from './config/vars';

export function getJWTStrategy() {
  const jwtOptions = {
    secretOrKey: CONFIG.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  };

  /**
   * Callback function after the JWT token is decoded
   * @param payload Of the form {sub, name, iat}
   * @param done callback
   * @returns
   */
  async function jwtCb(payload, done) {
    try {
      // const user = await findUser(payload.sub);
      const user = { name: 'hardcoded-name', roles: ['ADMIN'] };
      if (user) return done(null, user);
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  }

  const jwtStrategy = new JwtStrategy(jwtOptions, jwtCb);
  return jwtStrategy;
}

function checkRoleAccess(allowedRoles, userRoles) {
  for (const role of allowedRoles) {
    if (userRoles.includes(role)) {
      return true;
    }
  }
  return false;
}

/**
 * Callback function called after JWT validation by passport
 */
function postJWTAuthorization(req, res, next, roles) {
  /**
   * For authorization
   * @param err Error is called if there is an issue with retrieving user information
   * from the application
   * @param user
   * @param info Authorization related failures - underlying libary
   * seems to be returning Error or JSONWebTokenError objects, so we cannot
   * reliably figure out which.  Let us pick up info.message if present or
   * use a generic message
   * @returns
   */
  async function innFn(err, user, info) {
    const error = {};
    const isError = err || info || !user;
    if (isError) {
      error['cause'] = 'Authorization Issue';
      if (info) {
        error['underlyingCause'] = info.message ?? 'jwt-auth failure';
      } else if (err) {
        error['underlyingCause'] = err.message ?? 'jwt-auth failure';
      }
      next(new Error('auth'));
      return;
    }
    // This middleware will be called after passport.authenticate, so req.login will
    // be available to start a session
    try {
      // req.login ends up setting req.user = user
      await req.logIn(user, { session: false });
    } catch (er) {
      next(er);
      return;
    }
    if (!checkRoleAccess(roles, user.roles)) {
      next(new Error('This role cannot access'));
      return;
    }
    next();
  }
  return innFn;
}

/**
 * Authorization factory function that returns another function to help authorize
 * using the configured jwt strategy
 */
export function authorize(roles) {
  if (!Array.isArray(roles)) {
    roles = [roles];
  }
  function authedFn(req, res, next) {
    return passport.authenticate(
      'jwt',
      { session: false },
      postJWTAuthorization(req, res, next, roles)
    )(req, res, next);
  }
  return authedFn;
}
