class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Só faz o calculo se as strings forem iguais
        if(s.length === t.length){   
            // Declara objetos que vão contar quantas vezes a letra aparece
            const countS = {}
            const countT = {}
            
            // Percorre por toda a letras
            for(let i = 0; i < s.length; i++) {
                // Separa os caracteres em variaveis
                const charS = s[i]
                const charT = t[i]
                
                // Separa a contagem atual de vezes que um caractere repetiu
                const charCountS = (countS[charS] || 0) 
                const charCountT = (countT[charT] || 0)
                
                // Na chave do caractere soma um a quantidade de vezes que foi visto
                countS[charS] = charCountS + 1;
                countT[charT] = charCountT + 1;
            }

            // Percorre a lista verifica se são iguais
            // Se alguma for diferente retorna false
            for(const key in countS) {
                if(countS[key] !== countT[key]) return false
            }

            // Se todas forem iguais retorna true
            return true
        }

        // Se as strings tiverem  tamanhos diferentes retorna false
        return false
    }
}
