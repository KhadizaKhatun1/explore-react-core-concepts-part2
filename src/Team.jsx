import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    function handleAdd(){
        const newMembers=team+1;
        setTeam(newMembers)
    }
    function removePlayer(){
        setTeam(team-1)
    }
    const teamStyle={
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}