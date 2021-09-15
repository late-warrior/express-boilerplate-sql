/**
 * Configure passport strategies for authorization.  Here we use JWT
 */

import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { Blogger } from '../domain/models';
import { APIError } from './api-error';
import { APP_CONSTANTS, CONFIG } from './config/vars';

/**
 * Callback function after the JWT token is decoded
 * @param payload Of the form {sub, name, iat}
 * @param done callback
 * @returns
 */
async function jwtCb(payload, done) {
  try {
    const user = await Blogger.findOne(payload.sub);
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}

/**
 * Generate a JWT token
 * @param subject User identity (userId / email etc)
 * @returns
 */
export function generateToken(subject: string): string {
  const token = jwt.sign({}, CONFIG.jwtSecret, {
    expiresIn: CONFIG.jwtExpirationInterval,
    subject,
    issuer: APP_CONSTANTS.APP_NAME,
  });
  return token;
}

export function getJWTStrategy(): passport.Strategy {
  const jwtOptions = {
    secretOrKey: CONFIG.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  };

  const jwtStrategy = new JwtStrategy(jwtOptions, jwtCb);
  return jwtStrategy;
}

function checkRoleAccess(allowedRoles, userRoles) {
  return allowedRoles.some((item) => userRoles.includes(item));
}

/**
 * Sets up a callback function that is called after jwt verification (success or failure)
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
    } catch (error) {
      next(error);
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
 * Authorization factory function that returns a RequestHandler to help authorize
 * using the configured jwt strategy.  Successful authorization will result in the user
 * object being placed in req.user
 */
export function authorize(roles: Array<string>): express.RequestHandler {
  let routeRoles = roles;
  if (!Array.isArray(roles)) {
    routeRoles = [roles];
  }
  function authedFn(req, res, next) {
    return passport.authenticate(
      'jwt',
      { session: false },
      postJWTAuthorization(req, res, next, routeRoles)
    )(req, res, next);
  }
  return authedFn;
}
