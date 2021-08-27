import { expect } from 'chai';
import { add } from '../src/domain/add';

it('should add to numbers from an es module', () => {
  expect(add(3, 4)).to.equal(9);
});
