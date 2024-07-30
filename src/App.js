import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("hello");
  };
  const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datas = await result.json();
    setData(datas);
    console.log(datas);
  };
  useEffect(() => {
    getData();
  }, []);
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
        a<h1>sdsd</h1>
        <button
          disabled
          // data-testid='btn1'
          onClick={handleData}
        >
          hello
        </button>
        {/* <button onClick={()=>setData("")}>reset
        </button > */}
        {/* <div>{data}</div> */}
        {/* <button>dsd</button> */}
        <ul>

        {data && data.map((e) => {
          return(
            
            <li key={e.id}>{e.title}</li>
          )
        })}
        </ul>
      </header>
    </div>
  );
}

export default App;
