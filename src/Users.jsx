import { useEffect, useState } from "react"

export default function Users(){
    // default value for array type things use empty array as default value inside useState
    const [users,setUsers]=useState([])
    // useEffect function to use effect
    // for first time data load we always use an array
    // anonymous function
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h3>Users:{users.length}</h3>
        </div>
    )
}
/**
 * 1.declare a state to hold the data
 * 2.useEffect with call back and dependency array
 * 3.Use fetch to load data
 */