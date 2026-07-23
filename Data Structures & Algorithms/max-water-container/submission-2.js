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
        // [1,7,2,5,4,7,3,6]
        //  i j
        for(let i = 0; i < heights.length; i++){
            for(let j = i + 1; j < heights.length; j++) {
                let height = Math.min(heights[i], heights[j]) 
                let dist = j - i
                let area = height * dist
                
                res = Math.max(res, area)
            }
        }

        return res
    }
}
