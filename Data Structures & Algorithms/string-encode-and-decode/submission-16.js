class Solution {
    // A string pode ter qualque caractere #, '', 1
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ''

        let strResult = ''

        for(let i = 0; i < strs.length; i++){
            strResult += strs[i].length + '#' + strs[i]
            //numerocaract#palavra
        }

        return strResult
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str[0] === '') return ['']
        
        let result = []
        let i = 0
        
        while(i < str.length){
            let j = i

            while (str[j] != '#') j++;
            
            let totalChar = parseInt(str.substring(i, j))
            i = j + 1
            j = i + totalChar
            
            result.push(str.substring(i, j))
            
            i = j

            //5hello#
            // i   j
        }           
        
        return result
    }

}
