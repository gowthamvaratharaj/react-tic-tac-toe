import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function deriveActivePlayer(gameTurns){
let currentPlayer='X';
if(gameTurns.length>0&&gameTurns[0].player==='X'){
  currentPlayer='O';
}
return currentPlayer;
}
function deriveGameBoard(gameTurns){
  let gameBoard=[...initialGameBoard.map(array=>[...array])];
    for(const turn of gameTurns){
        const{square,player}=turn;
        const {row,col}=square;
        gameBoard[row][col]=player;
    }
    return gameBoard;
}
function deriveWinner(gameBoard,players){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
   const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
   const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
   const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
 if(firstSquareSymbol&&
   firstSquareSymbol===secondSquareSymbol&&
   firstSquareSymbol===thirdSquareSymbol){
     winner=players[firstSquareSymbol];
   }
  }
  return winner;
}

function App() {
  console.log('App Component Called!')
 //const [activePlayer,setActivePlayer]=useState('X');
 const [gameTurns,setGameTurns]=useState([]);
 const [players,setPlayers] = useState({
  X:'Player 1',
  O:'Player 2',
 });
//  const [hasWinner,setHasWinner]=
 const activePlayer = deriveActivePlayer(gameTurns);


 let gameBoard=deriveGameBoard(gameTurns);
const winner = deriveWinner(gameBoard,players);
 const hasDraw = gameTurns.length === 9 && !winner;
 function handleSelectSqure(rowIndex,colIndex){
  
//setActivePlayer((currentlyActivePlayer)=>currentlyActivePlayer==='X'?'O':'X')
setGameTurns(prevTurns=>{
  // let currentPlayer='X';
  // if(prevTurns.length>0&&prevTurns[0].player==='X'){
  //   currentPlayer='O';
  // }

  const currentPlayer = deriveActivePlayer(prevTurns)
  const updatedTurns = [{ square:{row:rowIndex,col:colIndex},player: currentPlayer },...prevTurns];
  return updatedTurns;
});
 }

 function handleRestart(){
  setGameTurns([]);
 }

 function handlePlayerNameChange(symbol,newName){
  setPlayers((prevPlayers)=>{
    return{
      ...prevPlayers,
      [symbol]:newName
    }
  });
 }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
          name="Player 1" 
          symbol='X' 
          isActive={activePlayer==='X'}
          onChangeName={handlePlayerNameChange}
          />
          <Player 
          name="Player 2" 
          symbol='O' 
          isActive={activePlayer==='O'}
          onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner||hasDraw)&&<GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard 
        onSelectSquare={handleSelectSqure} 
        board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
