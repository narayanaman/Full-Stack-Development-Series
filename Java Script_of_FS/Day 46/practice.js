/* Qs2. Write a JavaScript function to extract unique characters from a string. 
Example: str = “abcdabcdefgggh” ans = “abcdefgh”  */


function extractUniqueCharacters(str) {
    let uniqueChars = "";
    for (let i = 0; i < str.length; i++) {
        if (!uniqueChars.includes(str[i])) {
            uniqueChars += str[i];
        }
    }
    return uniqueChars;
}
// Example usage:
const str = "abcdabcdefgggh";
const result = extractUniqueCharacters(str);
console.log(result); // Output: "abcdefgh"