/**
 * Encodes text with Caesar cipher using the specified shift.
 * @param {string} text - The text to encode
 * @param {number} shift - The shift value (1-25)
 * @returns {string} The encoded text
 */
function encodeCaesar(text, shift) {
    return text.split('').map(char => {
        if (!char.match(/[a-zA-Z]/)) return char;
        
        const ascii_base = char === char.toUpperCase() ? 65 : 97;
        const shifted = (char.charCodeAt(0) - ascii_base + shift) % 26;
        return String.fromCharCode(shifted + ascii_base);
    }).join('');
}

/**
 * Decodes text encrypted with Caesar cipher using the specified shift.
 * @param {string} text - The text to decode
 * @param {number} shift - The shift value (1-25)
 * @returns {string} The decoded text
 */
function decodeCaesar(text, shift) {
    return text.split('').map(char => {
        if (!char.match(/[a-zA-Z]/)) return char;
        
        const ascii_base = char === char.toUpperCase() ? 65 : 97;
        const shifted = (char.charCodeAt(0) - ascii_base - shift) % 26;
        return String.fromCharCode((shifted < 0 ? shifted + 26 : shifted) + ascii_base);
    }).join('');
}

/**
 * Returns all possible shift combinations (1-25) and their decoded results.
 * @param {string} text - The text to decode
 * @returns {Array<[number, string]>} Array of [shift, decoded_text] pairs
 */
function tryAllShifts(text) {
    return Array.from({length: 25}, (_, i) => [i + 1, decodeCaesar(text, i + 1)]);
}