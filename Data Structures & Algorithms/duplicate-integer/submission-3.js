class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenNumberList = new Set()

        for (const num of nums) {
            const isNumber = typeof(num) === 'number'
            if (seenNumberList.has(num) && isNumber) return true    
            seenNumberList.add(num)        
        }
        return false
    }
}
