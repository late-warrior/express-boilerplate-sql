/**
 * Configure passport strategies for authorization.  Here we use JWT
 */

import jwt from 'jsonwebtoken';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { APIError } from './api-error';
import { CONFIG } from './config/vars';

export function sign(subject: string): string {
  const secret = 'adfa';
  const token = jwt.sign({}, secret, {
    expiresIn: '1d',
    subject,
    issuer: 'my-app',
  });
  return token;
}

export function verifyCredential(userName, password) {
  // Verify
  // Passwords are stored in encrypted fashion in the database
  return 'token';
}

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
 * Sets up a callback function that is called after jwt verification
 */
function postJWTAuthorization(req, res, next, roles) {
  /**
   * Callback that is called after jwt verification (either successful or failure)
   * @param err Error is called if there is an issue with retrieving user information
   * from the application
   * @param user User object
   * @param info Authorization related failures - underlying libary
   * seems to be returning Error or JSONWebTokenError objects, so we cannot
   * reliably figure out which.  Let us pick up info.message if present or
   * use a generic message
   * @returns
   */
  async function innFn(err, user, info) {
    const isError = err || info || !user;
    if (isError) {
      const apiError = APIError.fromAuthFailure(info, err);
      next(apiError);
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
      next(
        new APIError(403, {
          message: `This user does not have the required role access for this route`,
        })
      );
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
