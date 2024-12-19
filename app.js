// DOM Elements
const inputText = document.getElementById('input-text');
const shiftInput = document.getElementById('shift');
const outputText = document.getElementById('output-text');

/**
 * Validates and returns the shift value
 * @returns {number|null} The shift value or null if invalid
 */
function getValidShift() {
    const shift = parseInt(shiftInput.value);
    if (isNaN(shift) || shift < 1 || shift > 25) {
        outputText.textContent = 'Shift must be between 1 and 25';
        return null;
    }
    return shift;
}

/**
 * Handles single shift decoding
 */
function decodeText() {
    const shift = getValidShift();
    if (shift === null) return;
    
    const text = inputText.value.trim();
    if (!text) {
        outputText.textContent = 'Please enter some text to decode';
        return;
    }
    
    outputText.textContent = decodeCaesar(text, shift);
}

/**
 * Handles trying all possible shifts
 */
function handleAllShifts() {
    const text = inputText.value.trim();
    if (!text) {
        outputText.textContent = 'Please enter some text to decode';
        return;
    }
    
    const results = tryAllShifts(text);
    outputText.textContent = results
        .map(([shift, decoded]) => `Shift ${shift}: ${decoded}`)
        .join('\n\n');
}