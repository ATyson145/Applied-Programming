import Color
import Piece

class Knight(color: Color) : Piece(color) {
    override val symbol: String = "N"

    fun canMove(currentRow: Int, currentColumn: Int, newRow: Int, newCol: Int, board: Array<Array<Piece?>>): Boolean {

    }
}