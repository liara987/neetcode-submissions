class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            if (s.length !== t.length) return false

            const charCount = new Array(26).fill(0)
            
            // ASCII code of 'a', used as the base reference
            const baseCharCode = 'a'.charCodeAt(0)
                        
            // Iterate through both strings at the same time
            for(let i = 0; i < s.length; i++) {
                // Get the ASCII code of the current characters
                const sCharCode = s.charCodeAt(i) // i = 0 i = 1 i = 3 ...
                const tCharCode = t.charCodeAt(i) 

                const sPosition = sCharCode - baseCharCode // 97 - current charCode of s
                const tPosition = tCharCode - baseCharCode // 97 - current charCode of t

                // Increment the counter for the character from s
                charCount[sPosition]++ 

                 // Decrement the counter for the character from t
                charCount[tPosition]--
            }

            return charCount.every((val)=> val === 0)
        }
    }

