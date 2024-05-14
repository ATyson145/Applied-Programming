import Color
import Piece
import kotlin.math.abs

class Pawn(color: Color) : Piece(color) {
    override val symbol: String = "P"

    override fun isValidMove(fromRow: Int, fromCol: Int, toRow: Int, toCol: Int, board: Array<Array<Piece?>>): Boolean {
        val direction = if (color == Color.WHITE) -1 else 1
        val initialRow = if (color == Color.WHITE) 6 else 1

        if (toRow !in 0..8 || toCol !in 0..8) {
            return false
        }

        if (fromCol == toCol && toRow == fromRow + direction && board[toRow][toCol] == null) {
            return true
        }

        if (fromCol == toCol && toRow == fromRow + 2 * direction && fromRow == initialRow &&
            board[fromRow + direction][fromCol] == null && board[toRow][toCol] == null) {
                return true
        }

        if (abs(fromCol - toCol) == 1 && toRow == fromRow + direction &&
            board[toRow][toCol]?.color != color && board[toRow][toCol] != null) {
            return true
        }

        return false
    }

    override fun move(fromRow: Int, fromCol: Int, toRow: Int, toCol: Int, board: Array<Array<Piece?>>) {
        board[toRow][toCol] = board[fromRow][fromCol]
        board[fromRow][fromCol] = null
    }
    override fun capture(fromRow: Int, fromCol: Int, toRow: Int, toCol: Int, board: Array<Array<Piece?>>) {
        board[toRow][toCol] = board[fromRow][fromCol]
        board[fromRow][fromCol] = null
    }

    override fun getPosition(board: Array<Array<Piece?>>): Pair<Int, Int> {
        for (row in board.indices) {
            for (col in board[row].indices) {
                if (board[row][col] is Pawn && board[row][col]?.color == color) {
                    return Pair(row, col)
                }
            }
        }
        return Pair(-1, -1)
    }
}
