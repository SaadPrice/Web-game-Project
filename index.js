const chessBoard = document.querySelector("#chessboard")
const playerDisplay = document.querySelector("#player")
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]

function createBoard() { 
    startPieces.forEach((startPiece, i) => {
       const square = document.createElement('div')
       square.classList.add('square')
       square.setAttribute('square-id', i)
       square.classList.add('red')
       square.innerHTML = startPiece
       chessBoard.append(square)
    
    })

}
createBoard()

