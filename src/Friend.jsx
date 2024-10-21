export default function Friend({friend}){
    // desctructuring of friend single object at a time
    const {name,email}=friend
    return(
        // you can use the box without import if you bring any data from the another component/file from where you have imported css file
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
        </div>
    )
}
// export default function Friend({friend}){
//     const {email,name}=friend;
//     return(
//         // child component can get css property automatically
//         <div className="box">
//             <h4>Name:{email}</h4>
//             <p>Email:{name}</p>
//         </div>
//     )
// }