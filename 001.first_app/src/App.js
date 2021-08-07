import React, { useState } from 'react'
import List from './components/List'

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  function clickHandler() {
    let i = input.trim()
    if (!i) return
    setList([
      { text: i, completed: false }
      , ...list])
    setInput("")
  }

  function handleCheckbox(index) {
    return function () {
      let listCopy = [...list]
      listCopy[index].completed = !listCopy[index].completed
      setList(listCopy)
    }
  }

  return (
    <>
      <input type="text" value={input} onChange={el => setInput(el.target.value)} />
      <button onClick={clickHandler}>Add</button>
      <button onClick={() => setList([])}>Clear</button>
      <button>Refresh</button>
      <List list={list} handleCheckbox={handleCheckbox} />
    </>
  )
}

export default App;
