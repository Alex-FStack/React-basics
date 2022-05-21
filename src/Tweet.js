import React from 'react'
import './App.css'  //importing css file for styling the div class
// create a Tweet functional component - JS function that returns a React element
// it may take props as argument but will return a React element
// so React Functional component: is a JS Function, must return React element, take props if needed

// props -properties- object special React keyword used for passing data from one component to another
// props are passed in uni-directional flow from parent to child, data is read only, data from parent shouldnt be changed by child

function Tweet({name, tweet, likes}) {    // deconstruct props with {}

    return(
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{tweet}</p>
            <h3>{likes}</h3>

        </div>
    )
}

export default Tweet