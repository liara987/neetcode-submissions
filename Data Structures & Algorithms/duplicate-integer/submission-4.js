class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // Big O - Medir uma solução em tempo e espaço
    // Quanto de tempo demora pra executar
    // Quanto de espaço vai ocupa[
    
    // O(1) - mantem o mesmo independete do input - Oh yeah
    // O(n) - aumenta proporciona a quantidade de dados - Oh
    // O(n2) - dobre de espaço - Oh shit

    hasDuplicate(nums) {
        const seenNumberList = new Set()

        for (const num of nums) { // O(n)
            const isNumber = typeof(num) === 'number'
            if (seenNumberList.has(num) && isNumber) return true    
            seenNumberList.add(num)        
        }
        return false

    }
}
