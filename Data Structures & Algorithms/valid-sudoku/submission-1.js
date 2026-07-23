class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 1 - para cada linha deve conter numeros de 1-9 sem repetir
        // 2 - para cada coluna deve conter numeros de 1-9 sem repetir
        // 3 - em um sub grupo de 3 linhas e 3 colunas não deve ter repitido

        const col = new Map();
        const row = new Map();
        const sqr = new Map();

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;

                const sqrKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                // Verifica se os itens ja foram vistos
                if(
                    row.get(r) && row.get(r).has(board[r][c]) ||
                    col.get(c) && col.get(c).has(board[r][c]) ||
                    sqr.get(sqrKey) && sqr.get(sqrKey).has(board[r][c])
                ) return false

                if(!row.has(r)) row.set(r, new Set())
                if(!col.has(c)) col.set(c, new Set())
                if(!sqr.has(sqrKey)) sqr.set(sqrKey, new Set())

                row.get(r).add(board[r][c])
                col.get(c).add(board[r][c])
                sqr.get(sqrKey).add(board[r][c])
            }
        }

        return true
    }
}
