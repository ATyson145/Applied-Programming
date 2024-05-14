import Color
import Piece

class Rook(color: Color) : Piece(color) {
    override val symbol: String = "R"

    fun canMove(currentRow: Int, currentColumn: Int, newRow: Int, newCol: Int, board: Array<Array<Piece?>>): Boolean {

    }
}