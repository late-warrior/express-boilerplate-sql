/**
 * Controller methods are called after being validated at the route layer
 */
import express from 'express';
import { validate } from 'express-validation';
import Joi from 'joi';
import { validateMailToken } from '../../domain/repository';
import { generateToken } from '../../infra/auth-middleware';

export function loginValidation(): express.RequestHandler {
  const v = {
    body: {
      email: Joi.string().email().required(),
      emailToken: Joi.string().length(8).required(),
    },
  };
  return validate(v);
}

export async function generateJWT(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const { email, emailToken } = req.body;
  const user = await validateMailToken(email, emailToken);
  if (user) {
    // If validation is successful, generate a JWT
    const token = generateToken(user.email);
    res.json({ jwtToken: token });
  }
  // Error is thrown otherwise and caught by other middleware
}
