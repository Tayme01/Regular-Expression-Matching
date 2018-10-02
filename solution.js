/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = function(string, pattern) {
    var exactPattern = new RegExp('^' + pattern + '$'); // Match the exact pattern.
    return exactPattern.test(string); 
};
