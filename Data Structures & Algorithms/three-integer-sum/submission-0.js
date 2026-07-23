class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)       
        const result = []
        let count = 0

        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                for(let k = j + 1; k < nums.length; k++) {
                    if(nums[i] + nums[j] + nums[k] === 0) {
                        let list = [nums[i], nums[j], nums[k]]
                        let duplicated = result.some(subArray =>
                            subArray.length === list.length &&
                            subArray.every((valor, index) => valor === list[index])
                        );
                        
                        if(!duplicated){
                            result.push([nums[i], nums[j], nums[k]])
                            count++
                        }
                    }
                }
            }
        }

        return result   
    }
}
