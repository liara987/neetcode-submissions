class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Creates a hash map to store number -> index
        const indexByNumber = {} 
        
        // Populate the map with each number and its index
        for (let i = 0; i < nums.length; i++){
            indexByNumber[nums[i]] = i
        }

        // Iterate through the array to find the complement
        for(let i = 0; i < nums.length; i++) {

            // Calculate the number needed to reach the target
            const complement = target - nums[i]
            
            // Check if complement exists in the map
            const complementExists  = indexByNumber[complement] !== undefined

            // Make sure we never use the same element twice
            const isDifferentIndex = indexByNumber[complement] !== i

            // If the complement exists in the map and it's not the same index
            // we found the pair that sums to the target
            if( complementExists  && isDifferentIndex) {
                return [i, indexByNumber[complement]]
            }
        }

        // If no pair is found
        return [-1, -1]
    }
}
