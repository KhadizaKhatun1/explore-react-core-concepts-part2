import Friend from './friend'
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
    // useEffect to load data
    useEffect(()=>{
        // load data using fetch
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        // call setFriends and pass the data fetched from API
        .then(data=>setFriends(data))
    },[])
    // load data,setFriends function and default value is [] cause our api is an array of object
    const [friends,setFriends]=useState([])
    return(
        // box is css class name
        <div className='box'>
            {/* show the length of friends */}
            <h3>Friends:{friends.length}</h3>
            {
                // pass the object to the Friend component using map,friend prop and friend parameter
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}
/**
 * 1.declare state to hold data use useState
 * 2.to load data use useEffect with dependency and array
 * 3.use fetch to load data
 * 4.set loaded data to the state
 * 5.display data on the component.
 */
// import { useEffect, useState } from 'react'
// import './Friends.css'
// import Friend from './friend'
// export default function Friends(){
//     // default value is empty array for array data collections and useState function to hold data
//     const [friends,setFriends]=useState([])
//     console.log(friends)
//     // useEffect function to load data with fetch
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res=>res.json())
//         .then(data=>setFriends(data))
//     },[])
//     return(
//         <div className='box'>
//             <h3>Friends:{friends.length}</h3>
//            {
//             // Friend is a component and friend is propos and another one is parameter
//             friends.map(friend=><Friend friend={friend}></Friend>)
//            }
//         </div>
//     )
// }