import { expect } from 'chai';
import { APIError } from '../src/infra/api-error';

it('Should represent authorization failures correctly', () => {
  const error = new APIError(200, { message: 'Whoa' });
  expect(error.toJSON()).to.deep.equal({
    message: 'Whoa',
    httpStatus: 'OK',
    httpStatusCode: 200,
    httpStatusMessage: 'Standard response for successful HTTP requests.',
  });
});
