import { useEffect, useState } from 'react';
import './App.css';

const images = [
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Un1.svg/1920px-Un1.svg.png",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deux.svg/240px-Deux.svg.png",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Trois.svg/1920px-Trois.svg.png",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/240px-Quatre.svg.png",
  },
];

function App() {

  const [position, setPosition] = useState(getDelta())
  function getDelta() {
    const width = document.getElementsByClassName("images")[0].scrollWidth
    return width / images.length
  }
  useEffect(() => {
    // const scrollLeft = document.getElementsByClassName("images")[0].scrollLeft
    // console.log({scrollLeft})
    
    console.log({position})
  }
    , [position])

  function handleClick() {
    setPosition(p=>p+getDelta())
    console.log("clicked !!!")
    document.getElementsByClassName("images")[0].scrollTo({
      left: position,
      behavior: 'smooth'
    })
  }


  return (
    <div className="App">
      <div className="slider" >
        <div className="images">
          {images.map((image, i) => <img key={i} src={image.url} />)}
        </div>
      </div>
      <button onClick={handleClick}>CLICK ME !!!</button>
    </div>
  );
}

export default App;
