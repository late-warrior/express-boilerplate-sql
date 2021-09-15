/**
 * Controller methods are called after being validated at the route layer
 */
import express from 'express';
import { validate } from 'express-validation';
import Joi from 'joi';
import { issueMailToken, validateMailToken } from '../../domain/repository';
import { generateToken } from '../../infra/auth-middleware';

export function emailTokenValidation(): express.RequestHandler {
  const v = {
    body: Joi.object({
      email: Joi.string().email().required(),
    }),
  };
  return validate(v, { keyByField: true });
}

export async function generateEmailToken(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const { email } = req.body;
  try {
    const token = await issueMailToken(email);
    // TODO: Send the token as mail, but for now, we simply send it back in response
    res.json({ emailToken: token });
  } catch (error) {
    next(error);
  }
}

export function jwtTokenValidation(): express.RequestHandler {
  const v = {
    body: Joi.object({
      email: Joi.string().email().required(),
      emailToken: Joi.string().length(8).required(),
    }),
  };
  return validate(v, { keyByField: true });
}

export async function generateJWT(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> {
  const { email, emailToken } = req.body;
  try {
    const user = await validateMailToken(email, emailToken);
    if (user) {
      // If validation is successful, generate a JWT
      const token = generateToken(user.email);
      res.json({ jwtToken: token });
    }
  } catch (error) {
    next(error);
  }
  // Error is thrown otherwise and caught by other middleware
}
