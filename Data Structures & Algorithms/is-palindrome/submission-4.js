class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        const regex = /[^a-z0-9]/gi;
        const sTrim = s.replace(regex, '').toLocaleLowerCase().split(' ').join('')
        if (sTrim.length === 0) return true
        let last = sTrim.length - 1;
        let first = 0
        let isPalindrom = false
        
  
        while(sTrim[first] === sTrim[last] && first <= last){
            last--
            first++
            isPalindrom = sTrim[first] === sTrim[last]
            
            continue      
        } 

        if(isPalindrom) return isPalindrom

        return false        
    }
}
