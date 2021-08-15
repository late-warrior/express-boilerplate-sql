import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { jwtSecret } from './vars';

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
};

async function findUser(token) {
  return { name: 'hardcoded', id: 123 };
}

async function jwtCb(payload, done) {
  try {
    const user = await findUser();
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}

export const jwt = new JwtStrategy(jwtOptions, jwtCb);
