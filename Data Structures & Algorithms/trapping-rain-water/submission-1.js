class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || !height.length) return 0;
        
        let l = 0
        let r = height.length - 1
        let res = 0

        let maxL = 0
        let maxR = 0

        while(l < r){
            if (height[l] < height[r]) {
                if (height[l] >= maxL) {
                    maxL = height[l];
                } else {
                    res += maxL - height[l];
                }
                l++;
            } else {
                if (height[r] >= maxR) {
                    maxR = height[r];
                } else {
                    res += maxR - height[r];
                }
                r--;
            }
        }
        return res
    }
}
