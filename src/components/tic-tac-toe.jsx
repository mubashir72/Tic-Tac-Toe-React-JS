import { useState } from 'react'


const initialBoard = ()=>Array(9).fill(null);

function TicTacToe() {

  console.log(board)

  return (
    <div className='game'>
      <div className="status">
        Player X Turn 
        <button className='reset-button'> ResetGame</button>
      </div>

      <div className="board">
        {board.map((_, index)=>{
          return <button className="cell" key={index}>X</button>

        })}
        </div>
    </div>
  )
}

export default TicTacToe
