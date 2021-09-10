import jwt from 'jsonwebtoken';

export function sign(subject) {
  const secret = 'adfa-adfad-adfasd-adfas';
  const token = jwt.sign({}, secret, {
    expiresIn: '1d',
    subject,
    issuer: 'my-app',
  });
  return token;
}

const token = sign('adf');
console.log(token);
