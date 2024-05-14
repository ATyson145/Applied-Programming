class Chessboard {
    private val board: Array<Array<Piece?>> = Array(8) { Array(8) { null } }
    init {
        initializeBoard()
    }
    private fun initializeBoard() {
        for (col in 0..<8) {
            board[1][col] = Pawn(Color.WHITE)
            board[6][col] = Pawn(Color.BLACK)
        }

        board[0][0] = Rook(Color.WHITE)
        board[0][7] = Rook(Color.WHITE)
        board[7][0] = Rook(Color.BLACK)
        board[7][7] = Rook(Color.BLACK)

        board[0][1] = Knight(Color.WHITE)
        board[0][6] = Knight(Color.WHITE)
        board[7][1] = Knight(Color.BLACK)
        board[7][6] = Knight(Color.BLACK)

        board[0][2] = Bishop(Color.WHITE)
        board[0][5] = Bishop(Color.WHITE)
        board[7][2] = Bishop(Color.BLACK)
        board[7][5] = Bishop(Color.BLACK)

        board[0][3] = Queen(Color.WHITE)
        board[0][4] = King(Color.WHITE)
        board[7][3] = Queen(Color.BLACK)
        board[7][4] = King(Color.BLACK)
    }

    fun printBoard() {
        for (row in 0..<8) {
            for (col in 0..<8) {
                val piece = board[row][col]
                if (piece != null) {
                    print(piece.symbol)
                }
                else {
                    print(".")
                }
                print(" ")
            }
            println()
        }
    }
}
