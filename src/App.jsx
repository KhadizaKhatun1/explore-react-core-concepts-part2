import './App.css'
// event handler
import Counter from './Counter'
import Team from './Team'
// users
import Users from './Users'
// Friends
import Friends from './Friends'
function App() {
  function handleCLick(){
    alert("Button is clicked")
  }
  function handleClick2(){
    alert("Button2 is clicked")
  }
const addToFive=(num)=>{
  alert(num + 5)
}
  return (
    <>
      <h3>React Core Concepts 2</h3>
      {/* friends */}
      <Friends></Friends>
      {/* Users for effect */}
      <Users></Users>
      {/* team */}
      <Team></Team>
      {/* counter */}
      <Counter></Counter>
      {/* normal html */}
      {/* <button onclick="handleClick()"></button> */}
      <button onClick={handleCLick}>Click Me</button>
      <button onClick={handleClick2}>Clcik2</button>
      <button onClick={()=>{alert("Button 3 is clicked")}}>third</button>
      <button onClick={()=>addToFive(3)}>Button4</button>
    </>
  )
}

export default App
