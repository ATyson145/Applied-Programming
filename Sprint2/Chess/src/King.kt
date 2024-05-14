import Color
import Piece

class King(color: Color) : Piece(color) {
    override val symbol: String = "K"

    fun canMove(currentRow: Int, currentColumn: Int, newRow: Int, newCol: Int, board: Array<Array<Piece?>>): Boolean {

    }
}