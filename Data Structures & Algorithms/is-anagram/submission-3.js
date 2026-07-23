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
            // charCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

            // ASCII code of 'a', used as the base reference
            const baseCharCode = 'a'.charCodeAt(0)
                        
            // Iterate through both strings at the same time
            for(let i = 0; i < s.length; i++) {
                // Get the ASCII code of the current characters
                const sCharCode = s.charCodeAt(i) // i = 0 i = 1 i = 3 ...
                const tCharCode = t.charCodeAt(i) 
                
                // i = 0 
                // i = 1 
                // i = 2 
                // i = 3 
                
                //  0     1    2    3    4
                // ['l', 'i', 'a', 'r', 'a',] s
                //  108  105  97   114  97
                
                // ['a', 'r', 'a', 'i', 'l',] t
                //   97   114  97   105  108  

                // i = 0
                // sCharCode = 108
                // tCharCode = 97
                
                // sPosicion 108 - 97 = 11     i = 0
                // tPosition 97 - 97 = 0
                
                // sPosicion 105 - 97 = 8      i = 1
                // tPosition 114 - 97 = 17

                // sPosicion 97 - 97 = 0       i = 2
                // tPosition 97 - 97 = 0

                // sPosicion 114 - 97 = 17     i = 3
                // tPosition 105 - 97 = 11


                // Convert the character to an index between 0 and 25
                const sPosition = sCharCode - baseCharCode // 97 - current charCode of s
                const tPosition = tCharCode - baseCharCode // 97 - current charCode of 7

                // Increment the counter for the character from s
                charCount[sPosition]++ 

                 // Decrement the counter for the character from t
                charCount[tPosition]--

                // charCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }

            // If all values return to 0, the characters cancel out → anagrams
            return charCount.every((val)=> val === 0)
        }
    }

