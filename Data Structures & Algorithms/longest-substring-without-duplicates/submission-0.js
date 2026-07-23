class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let countSet = new Set()
        let count = 0;
        let l = 0

        if(s.length === 0) return 0
        
        for(let r = 0; r < s.length; r++){
            while(countSet.has(s[r])) {
                countSet.delete(s[l])
                l++
            }

            countSet.add(s[r])
            count = Math.max(count, countSet.size)
        }
         
        return count
    }
    // pega e contar a maior string sem repitir

}
