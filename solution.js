/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
let isMatch = function(string, pattern) {
    let exactPattern = new RegExp('^' + pattern + '$'); // Match the exact pattern.
    return exactPattern.test(string); 
};

module.exports = isMatch;