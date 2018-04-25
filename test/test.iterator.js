/* globals assert */
const {RegExtras, regIterator} = require('../dist/index-umd.js');

describe('RegExtras - Iterator', function () {
    it('regIterator', () => {
        let g = 0;
        const actual = [];
        for (const i of regIterator(/(ab)(c|d)/, 'abc---abd--abc')) {
            g++;
            if (g > 2) {
                break;
            }
            actual.push(i);
        }
        assert.deepEqual([
            ['abc', 'ab', 'c', 0],
            ['abd', 'ab', 'd', 1]
        ], actual);
    });
    it('RegExtras.prototype.regIterator', () => {
        let g = 0;
        const actual = [];
        for (const i of RegExtras(/(ab)(c|d)/).iterator('abc---abd--abc')) {
            g++;
            if (g > 2) {
                break;
            }
            actual.push(i);
        }
        assert.deepEqual([
            ['abc', 'ab', 'c', 0],
            ['abd', 'ab', 'd', 1]
        ], actual);
    });
});
