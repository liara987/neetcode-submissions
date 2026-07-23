class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // tenho que achar o maior numero
    // andar o máximo possivel no array
    // achar o numero mais proximo do maior
    maxArea(heights) {
        // [1,7,2,5,4,7,3,6]
        //  i j

        let l = 0
        let r = heights.length - 1
        let res = 0

        while(l < r){
            let larg = r - l
            let alt = Math.min(heights[l], heights[r])
            let area = alt * larg

            res = Math.max(res, area)
            heights[l] <= heights[r] ? l++ : r--
        }
        
       return res
    }
}
