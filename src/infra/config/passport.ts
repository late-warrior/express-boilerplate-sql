/**
 * Configure a passport strategy - currently unused
 */
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { CONFIG } from './vars';

const jwtOptions = {
  secretOrKey: CONFIG.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
};

async function findUser(token) {
  return { name: 'hardcoded', id: 123 };
}

async function jwtCb(payload, done) {
  try {
    const user = await findUser('ata');
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}

export const jwt = new JwtStrategy(jwtOptions, jwtCb);
