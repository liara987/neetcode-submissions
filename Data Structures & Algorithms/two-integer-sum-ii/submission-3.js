class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
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
                
                if(sum === target) return [first + 1, last + 1]                    
        }
    }
}
