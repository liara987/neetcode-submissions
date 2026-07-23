class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // tenho que achar o maior numero
    // andar o máximo possivel no array
    // achar o numero mais proximo do maior
    maxArea(heights) {
        let res = 0

        for(let i = 0; i < heights.length; i++){
            for(let j = i + 1; j < heights.length; j++) {
                let min = Math.min(heights[i], heights[j]) 
                res = Math.max(res, min *  (j-i))
            }
        }

        return res
    }
}
