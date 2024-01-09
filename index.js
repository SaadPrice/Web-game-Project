const chessBoard = document.querySelector("#chessboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8
let playerGo = 'grey'
playerDisplay.textContent ='grey'
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
      // square.classList.add('red')
       square.innerHTML = startPiece
       square.firstChild?.setAttribute('draggable', true)
       const row = Math.floor ( (63 - i) / 8) + 1   
       if  ( row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "blue" : "red")
       } else{
        square.classList.add(i % 2 === 0 ? "red" : "blue")
       }
       
       if (i <= 15) {
        square.firstChild.firstChild.classList.add('grey')
       }
       
       if ( i >= 48) {
        square.firstChild.firstChild.classList.add('white')
       }
       
       chessBoard.append(square) 
       
    })

}


createBoard()




 const allsquares = document.querySelectorAll("#chessboard .square")

 const allSquares = document.querySelectorAll('.square');
 let startPositionId;
 let draggedElement;
 
 allSquares.forEach(square => {
     square.addEventListener('dragstart', dragStart);
     square.addEventListener('dragover', dragOver);
     square.addEventListener('drop', dragDrop);
 });
 
 function dragStart(e) {
     startPositionId = e.target.parentNode.getAttribute('square-id');
     draggedElement = e.target;
 }
 
 function dragOver(e) {
     e.preventDefault();
 }
 
 function dragDrop(e) {
    e.stopPropagation();
    const taken = e.target.classList.contains('piece');
    console.log(e.target);
    const correctGo = draggedElement.firstChild.classList.contains(playerGo);
    const opponentGo = playerGo === 'white' ? 'grey' : 'white';
    const takenByOpponent = e.target.firstChild?.classList?.contains(opponentGo);



    //e.target.appendChild(draggedElement)
    //e.target.parentNode.append(draggedElement)
    changePlayer();
}

function changePlayer() {
    if (playerGo === "grey") {
        reverseIds();
        playerGo = "white";
        playerDisplay.textContent = "white";
    } else {
        revertIds();
        playerGo = "grey";
        playerDisplay.textContent = "grey";
    }
}

function reverseIds() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square, i) =>
        square.setAttribute('square-id', (width * width - 1) - i)
    );
}

function revertIds() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square, i) => square.setAttribute('square-id', i));
}
