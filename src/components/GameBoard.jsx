// import React, { useState } from 'react'
// const initialGameBoard =[
//     [null,null,null],
//     [null,null,null],
//     [null,null,null]
// ]
function GameBoard({onSelectSquare,board}) {
    console.log('GameBoard Component Called!')

    // let gameBoard=initialGameBoard;
    // for(const turn of turns){
    //     const{square,player}=turn;
    //     const {row,col}=square;
    //     gameBoard[row][col]=player;
    // }



    //initialGameBoard.map((rowkey,value)=>console.log("this is row value : ",rowkey,"this is value : ",value))
    // const [gameBoard,setGameBoard]=useState(initialGameBoard);
    // function handleSelectSquare(rowIndex,colIndex){
    //         setGameBoard((prevGameBoard)=>{
    //             console.log("this is previous game : ",prevGameBoard);
    //             const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
    //             console.log(updatedBoard);
    //             updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //             return updatedBoard;
    //         });
    //         onSelectSquare();
    // }
  return (<ol id="game-board">
    {board.map((row,rowIndex)=> (<li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=> (<li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} 
                disabled={playerSymbol!==null}>{playerSymbol}</button>
                </li>
                ))}
        </ol>
    </li>))}
  </ol>
  
  )
}

export default GameBoard