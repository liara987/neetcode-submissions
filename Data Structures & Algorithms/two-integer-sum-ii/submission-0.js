class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const result = []
        for (let first = 0; first < numbers.length; first++) {
            for(let last = numbers.length - 1; last >= 0;last--){
                if(numbers[first] + numbers[last] === target){
                    result.push(first+1)
                    result.push(last+1)
                    return result
                }
            }
        }

        return result
    }
}
