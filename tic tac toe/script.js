document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    const statusDisplay = document.getElementById('status');
    const restartButton = document.getElementById('restart');
  
    let board = Array(9).fill(null);
    let xIsNext = true;
  
    const handleClick = (event) => {
      const index = event.target.dataset.index;
  
      if (board[index] || calculateWinner(board)) {
        return;
      }
  
      board[index] = xIsNext ? 'X' : 'O';
      xIsNext = !xIsNext;
  
      event.target.textContent = board[index];
      const winner = calculateWinner(board);
  
      if (winner) {
        statusDisplay.textContent = `Winner: ${winner}`;
      } else if (board.every(square => square)) {
        statusDisplay.textContent = 'Draw!';
      } else {
        statusDisplay.textContent = `Next player: ${xIsNext ? 'X' : 'O'}`;
      }
    };
  
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
  
      return null;
    };
  
    const restartGame = () => {
      board = Array(9).fill(null);
      xIsNext = true;
      squares.forEach(square => (square.textContent = ''));
      statusDisplay.textContent = `Next player: X`;
    };
  
    squares.forEach(square => square.addEventListener('click', handleClick));
    restartButton.addEventListener('click', restartGame);
  
    statusDisplay.textContent = `Next player: X`;
  });
  