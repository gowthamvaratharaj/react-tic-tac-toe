import React, { useState } from 'react'

function Player({name,symbol,isActive,onChangeName}) {
    console.log('Player Component Called');
    const[isEditing,setIsEditing]=useState(false);
    const[playerName,SetPlayerName]=useState(name);
    function handleEditClick(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
            onChangeName(symbol,playerName);
        }
    }
    const dynamicPlayerName = (isEditing)?
    <input type='text' required value={playerName} onChange={()=>handleOnChange(event)}></input>:
    <span className='palyer-name'>{playerName}</span>;
   
    function handleOnChange(event){
        SetPlayerName(()=>event.target.value);
    }
  return (
  <>
  <li className={isActive?'active':undefined}>
    <span className='player'>
        {dynamicPlayerName}
        <span className='player-symbol'>{symbol}</span>
    </span>
    <button onClick={()=>{handleEditClick()}}>{(isEditing)?"Save":"Edit"}</button>
  </li>
  </>
  )
}

export default Player