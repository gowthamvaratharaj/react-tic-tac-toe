import React from 'react'

function Log({turns}) {

  return (
  <ol id='log'>
    {turns.map(turn=><li key={`${turn.square.row}${turn.square.col}`}>
        {turn.player} Selected Row: {turn.square.row+1} , Col: {turn.square.col+1}
        </li>)}
  </ol>
  )
}

export default Log