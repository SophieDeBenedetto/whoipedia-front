/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  formatDate
} from 'whoipedia-front/helpers/format-date';

describe('FormatDateHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = formatDate(42);
    expect(result).to.be.ok;
  });
});
