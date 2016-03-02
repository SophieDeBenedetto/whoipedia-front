/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  singleOrLastOfMany
} from 'whoipedia-front/helpers/single-or-last-of-many';

describe('SingleOrLastOfManyHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = singleOrLastOfMany(42);
    expect(result).to.be.ok;
  });
});
