import './App.css';
import { useState } from 'react'
import DisplayData from './DisplayData'

function App() {
  // https://api.weatherapi.com/v1/astronomy.json?key=cec4cad6bf2f4df6bc241617212108&q=India&dt=2021-08-21

  let [data, setData] = useState()
  let [loading, setLoading] = useState(false)

  async function handleDateChange(e) {
    setLoading(true)
    let res = await fetch(`https://api.weatherapi.com/v1/astronomy.json?key=cec4cad6bf2f4df6bc241617212108&q=India&dt=${e.target.value}`)
    let d = await res.json()
    setData(d.astronomy.astro)
    setLoading(false)
  }

  return (
    <div className="App">
      <h1>ASTRONOMY DATA</h1>
      <div>
      <label>Date:</label>
      <input type="date" onChange={handleDateChange} />
      </div>
      <div>
        {loading && "LOADING..."}
        {!loading && <DisplayData data={data}/>}
      </div>
    </div>
  );
}

export default App;
