import React, { useState } from 'react'
import "./Temp.css"


function Temp({ bookName, initialGood }) {

    const [title, setTitle] = useState(bookName)
    const [isGood, setIsGood] = useState(initialGood);

    function getSomething() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTitle(json.title))
    }
    

    return (
        <div className={isGood ? "good" : "bad"}>
            <h2>{title}</h2>
            <button onClick={() => setIsGood(prevIsGood => !prevIsGood)}>
                Change
            </button>
            <button onClick={getSomething}>
                Get Something
            </button>
        </div>
    )
}

export default Temp
