import httpStatus from 'http-status';
import passport from 'passport';
import User from '../models/user.model';
import APIError from '../errors/api-error';

const ADMIN = 'admin';
const LOGGED_USER = '_loggedUser';

function handleJWT(req, res, next, roles) {
  return async (err, user, info) => {
    const error = err || info;
    // login function on req is added by passportjs
    const logIn = req.login;
    const apiError = new APIError({
      message: error ? error.message : 'Unauthorized',
      status: httpStatus.UNAUTHORIZED,
      stack: error ? error.stack : undefined,
    });

    try {
      if (error || !user) throw error;
      await logIn(user, { session: false });
      // eslint-disable-next-line
    } catch (error_ignore) {
      return next(apiError);
    }

    if (roles === LOGGED_USER) {
      // Only the admin user can log in as another user
      if (user.role !== 'admin' && req.params.userId !== user._id.toString()) {
        apiError.status = httpStatus.FORBIDDEN;
        apiError.message = 'Forbidden';
        return next(apiError);
      }
    } else if (!roles.includes(user.role)) {
      apiError.status = httpStatus.FORBIDDEN;
      apiError.message = 'Forbidden';
      return next(apiError);
    } else if (err || !user) {
      return next(apiError);
    }

    // If all checks pass, set user on req.user
    req.user = user;

    return next();
  };
}

function authorize(roles = User.roles) {
  function innerAuthFn(req, res, next) {
    return passport.authenticate(
      'jwt',
      { session: false },
      handleJWT(req, res, next, roles)
    )(req, res, next);
  }
  return innerAuthFn;
}

export { ADMIN, LOGGED_USER, authorize };
export const oAuth = (service) =>
  passport.authenticate(service, { session: false });
