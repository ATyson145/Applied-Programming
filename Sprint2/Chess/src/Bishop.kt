import Color
import Piece

class Bishop(color: Color) : Piece(color) {
    override val symbol: String = "B"

    fun canMove(currentRow: Int, currentColumn: Int, newRow: Int, newCol: Int, board: Array<Array<Piece?>>): Boolean {

    }
}