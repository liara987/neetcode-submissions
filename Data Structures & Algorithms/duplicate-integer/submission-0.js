class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenNumberList = new Set()

        for (const num of nums) {
            if (seenNumberList.has(num)) return true    
            seenNumberList.add(num)        
        }
        return false
    }
}
