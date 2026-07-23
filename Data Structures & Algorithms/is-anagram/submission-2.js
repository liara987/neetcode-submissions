class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            // If the strings have different lengths, they cannot be anagrams
            if (s.length !== t.length) return false

            // Array with 26 positions to count the frequency of letters [a-z]
            const charCount = new Array(26).fill(0)

            // ASCII code of 'a', used as the base reference
            const baseCharCode = 'a'.charCodeAt(0)
                        
            // Iterate through both strings at the same time
            for(let i = 0; i < s.length; i++) {
                // Get the ASCII code of the current characters
                const sCharCode = s.charCodeAt(i) 
                const tCharCode = t.charCodeAt(i) 
                
                 // Convert the character to an index between 0 and 25
                const sPosition = sCharCode - baseCharCode // 97 - current charCode of s
                const tPosition = tCharCode - baseCharCode // 97 - current charCode of 7

                // Increment the counter for the character from s
                charCount[sPosition]++ 

                 // Decrement the counter for the character from t
                charCount[tPosition]--
            }

            // If all values return to 0, the characters cancel out → anagrams
            return charCount.every((val)=> val === 0)
        }
    }

