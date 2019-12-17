/**
 *
 * @param {string} s
 * @returns {void}
 */
export default function write (s) {
  document.body.append(s, document.createElement('br'));
}
