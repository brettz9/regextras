import {mixinRegex} from '../src/index.js';

describe('mixinRegex', () => {
  it('should mix expression with flags', () => {
    const regex = /abc/gimuys;
    const copied = mixinRegex(regex);
    expect(copied.flags).to.equal(regex.flags);
    expect(copied.source).to.equal(regex.source);
    expect(copied.lastIndex).to.equal(regex.lastIndex);
  });
  it('should mix expression without flags', () => {
    const regex = /abc/;
    const copied = mixinRegex(regex);
    expect(copied.flags).to.equal(regex.flags);
    expect(copied.source).to.equal(regex.source);
    expect(copied.lastIndex).to.equal(regex.lastIndex);
  });
  it('should add flags', () => {
    const regex = /abc/;
    const copied = mixinRegex(regex, 'gimsuy');
    expect(copied.source).to.equal(regex.source);
    expect(copied.lastIndex).to.equal(regex.lastIndex);
    expect(copied.flags).to.not.equal(regex.flags);
    expect(copied.flags).to.equal('gimsuy');
  });
});
