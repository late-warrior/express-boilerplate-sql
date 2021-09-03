/**
 * Configure passport strategies for authorization
 */
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import {findUser} from '../controllers/user.controller';
import { CONFIG } from './vars';

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

export const jwt = new JwtStrategy(jwtOptions, jwtCb);
