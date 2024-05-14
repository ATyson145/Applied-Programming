enum class Color {
    WHITE, BLACK
}

abstract class Piece(val color: Color) {
    abstract val symbol: String

    fun isWhite(): Boolean {
        return color == Color.WHITE
    }

    fun isBlack(): Boolean {
        return color == Color.BLACK
    }

    abstract fun isValidMove(fromRow: Int, fromCol: Int, toRow: Int, toCol: Int, board: Array<Array<Piece?>>): Boolean
    abstract fun move(fromRow: Int, fromCol: Int, toRow: Int, toCol: Int, board: Array<Array<Piece?>>)
    abstract fun capture(fromRow: Int, fromCol: Int, toRow: Int, toCol: Int, board: Array<Array<Piece?>>)
    abstract fun getPosition(board: Array<Array<Piece?>>): Pair<Int, Int>

}