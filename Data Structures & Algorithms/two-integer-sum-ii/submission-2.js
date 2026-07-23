class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const result = []
        let last = numbers.length - 1;
        let first = 0

        while(first < last){
                let sum = numbers[first] + numbers[last]
                if(sum < target){
                        first++
                }
                
                if(sum > target){
                        last--
                }
                
                if(sum === target){
                        result.push(first + 1)       
                        result.push(last + 1)   
                        return result    
                }   
        }
    }
}
