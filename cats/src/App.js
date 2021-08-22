import './App.css';
import { useState } from 'react'

function App() {

  let [cat, setCat] = useState({ "breeds": [], "id": "BztpZ3zY2", "url": "https://cdn2.thecatapi.com/images/BztpZ3zY2.jpg", "width": 1280, "height": 720 })



  async function getImage(){
    const res = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await res.json()
    let c = data[0]
    if (c.width > 1000 || c.height > 1000) {
      c.width /= 2
      c.height /= 2
    }
    setCat(c)
  }

  return (
    <div className="App">
      <button onClick={getImage}>GET RANDOM CAT IMAGE</button><br/>
      <img src={cat.url} width={cat.width} height={cat.height*2/3} />
    </div>
  );
}

export default App;
