import Color
import Piece

class Queen(color: Color) : Piece(color) {
    override val symbol: String = "Q"

    fun canMove(currentRow: Int, currentColumn: Int, newRow: Int, newCol: Int, board: Array<Array<Piece?>>): Boolean {

    }
}