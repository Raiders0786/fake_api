function init(){

    board = [
        '','','',
        '','','',
        '','',''
    ];
};
    init();
const squares = Array.from(document.querySelectorAll('boards'));

function render(){
    board.forEach(function(mark,index) {
        console.log(mark,index);
        squares[index].textContent = mark;
    });
    render();
};


let board;
let turn ='X';
let win;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

document.getElementsById('boards').addEventListener('click', handleTurn);
const messages = documnet.querySelector('h2');

inboard[idx] =turn;
console.log(board);
function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    
    board[idx] = turn;
    win = getWinner();
    turn = turn === 'X' ? 'O': 'X';
    if (turn === 'X'){
        turn ='O'
    } else{
        turn = 'X';
    };
    
    render();
    
};

function getWinner(){
    let winner = null;
    winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner =board[combo[0]];
        }
    });
    return winner ? winner:board.includes('')?null:'T';
};

messages.textContent = win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

if ( win === 'T' ) {
    messages.textContent = `That's a tie, queen!`
} else if (win) { 
    messages.textContent = `${win} wins the game!`
} else {
    messages.textContent = `It's ${turn}'s turn!`
}

document.getElementById('board').addEventListener('click', handleMove);

document.getElementById('reset-button').addEventListener('click', init);
