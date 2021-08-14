import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import User from '../api/models/user.model';
import { jwtSecret } from './vars';

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
};

async function jwtCb(payload, done) {
  try {
    const user = await User.findById(payload.sub);
    // cons user = 'hardcoded-username'
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
}

export const jwt = new JwtStrategy(jwtOptions, jwtCb);
