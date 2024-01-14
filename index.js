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
   
    function checkIfValid(target) {
        // Add your validation logic here
        // For example, you might check if the target is a valid drop zone
        // and return true if it is, otherwise return false.
        return true; // Replace this with your actual validation logic
    }
    
    // Now you can use checkIfValid in your dragDrop function
    const valid = checkIfValid(e.target);
    const correctGo = draggedElement.firstChild.classList.contains(playerGo);
    const opponentGo = playerGo === 'white' ? 'grey' : 'white';
    const takenByOpponent = e.target.firstChild?.classList?.contains(opponentGo);
    
if (correctGo){
    //must check this first
    if(takenByOpponent && valid) {
        e.target.remove();
        e.target.parentNode.append(draggedElement);
        
        changePlayer();
        return;
    }
    // then check this
    if (taken && ! takenByOpponent){
        infoDisplay.textContent = "you cannot go here"
        setTimeout(() => infoDisplay.textContent = "", 2000);
        return;
        
        if (valid){
            e.target.append(draggedElement);
            checkForWin()
            changePlayer();
            return;
        }
    }
}
}


function checkValid(target){
    console.log(target);
    const targetId = Number(target.getAttribute('square-id')) ||Number( target.parentNode.getAttribute('square-id'));
    console.log(targetId);
    const startId = Number(startPositionId);
    const piece = draggedElement.id;
    console.log('targetId', targetID);
    console.log('startId', startId);
    console.log('piece', piece);

    switch (piece) {
        case 'pawn':
            const starterRow = [8, 9, 10, 11, 12, 13, 14, 15];
            if (
                (starterRow.includes(startId) && startId + width * 2 === targetId) ||
                (startId + width === targetId - 1 && !document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild) ||
                (startId + width === targetId + 1 && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild)
            ) {
                return true;
            }
            break;
    }
    
    switch (pieceType) {
        case 'knight':
            if (
                startId + width * 2 + 1 === targetId ||
                startId + width * 2 - 1 === targetId ||
                startId + width - 2 === targetId ||
                startId + width + 2 === targetId ||
                startId - width * 2 + 1 === targetId ||
                startId - width * 2 - 1 === targetId ||
                startId - width + 2 === targetId ||
                startId - width - 2 === targetId
            ) {
                return true;
            }
            break;
    
        case 'bishop':
            if (
                startId + width + 1 === targetId ||
                (startId + width * 2 + 2 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild) ||
                (startId + width * 3 + 3 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild) ||
                (startId + width * 4 + 4 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild) ||
                (startId + width * 5 + 5 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 + 4}"]`).firstChild) ||
                (startId + width * 6 + 6 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 5 + 5}"]`).firstChild) ||
                (startId + width * 7 + 7 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4 + 4}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 5 + 5}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 6 + 6}"]`).firstChild) )
                // Continue the pattern for the other directions
            
                switch (pieceType) {
                    case 'rook':
                        if (
                            startId + width === targetId ||
                            (startId + width * 2 === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild) ||
                            (startId + width * 3 === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild) ||
                            (startId + width * 4 === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3}"]`).firstChild) ||
                            (startId + width * 5 === targetId && !document.querySelector(`[square-id="${startId + width}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 4}"]`).firstChild)
                            // Continue the pattern for the other directions
                        ) {
                            return true;
                        }
                        break;
                
                        case 'queen':
                            if (
                                startId + width + 1 === targetId ||
                                (startId + width * 2 + 2 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild) ||
                                (startId + width * 3 + 3 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild) ||
                                (startId + width * 4 + 4 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild) )
                                // Continue the pattern for the other directions
                            {
                                return true;
                            }
                            break;
                        
                            return true;
                        }
                        break;
                
                        // Continue the pattern for other directions in the 'queen' case
                
                    case 'king':
                        if (
                            startId + 1 === targetId ||
                            startId - 1 === targetId ||
                            startId + width === targetId ||
                            startId - width === targetId ||
                            startId + width + 1 === targetId ||
                            startId + width - 1 === targetId ||
                            startId - width + 1 === targetId ||
                            startId - width - 1 === targetId
                        ) {
                            return true;
                        }
                        break;
                }
                
                return false;
                
                    return true
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

function checkForWin() {
    const kings =   Array.from(document.querySelectorAll('#king'))
    console.log(kings)
    if(
        !kings.some(king => king.firstChild.classList.contains('white'))
    ){
        infoDisplay.innerHTML = "Grey player wins!"
        const allSquares = document.querySelectorAll('.square')
        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', false))
    }
    if(
        !kings.some(king => king.firstChild.classList.contains('grey'))
    ){
        infoDisplay.innerHTML = "White player wins!"
        const allSquares = document.querySelectorAll('.square')
        allSquares.forEach(square => square.firstChild?.setAttribute('draggable', false))
    }
}