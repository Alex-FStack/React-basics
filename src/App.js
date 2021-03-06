//need to create a component- file holds all the logic(html and styling), self contained piece of code (modal)
// we create a component and export it, will be rendered with ReactDOM.render()

import React, {useState} from 'react'
import Tweet from './Tweet'

function App() {  //this function component will be rendered to the screen
//   //additional logic will be added in this part before return statement
//   const sayHello = () => {
//     console.log('hello')
//   };

const [isRed, setRed] = useState(false)

const [count, setCount] = useState(0)

const increment = () => {
  setCount(count + 2)
  setRed(true)
}

const reduction = () => {
  setCount(count - 2)
  setRed(false)

} 

  return(
    <div className='app'>
      <h1 className={isRed ? 'red' : ''}>Change text color</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reduction}>Reduce</button>
      <h1>Current count: {count}</h1>








      
      {/* <Tweet name="John Smith" tweet="First tweet this year" likes="1000+"/>
      <Tweet name="Michael Snow" tweet="Podcast coming soon" likes="251000"/>
      <Tweet name="Tom Brady" tweet="Social media course coming soon" likes="455k"/>
      <Tweet name="Ken Shamrock" tweet="Twitter is biased" likes="1mil"/>
       */}
    </div>
  
  );
}
//react will automatically compile this jsx code into html

export default App  // will export this file