import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const handleData=()=>{
    setData("hello")
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload. learn react
        </p>
        <input
          type="text"
          placeholder="enter"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <h1>sdsd</h1>
        <button 
        disabled
        // data-testid='btn1' 
        onClick={handleData}>hello
        </button >
        {/* <button onClick={()=>setData("")}>reset
        </button > */}
        <div>{data}</div>
        {/* <button>dsd</button> */}
      </header>
    </div>
  );
}
 
export default App;
