import logo from "./logo.svg";
import "./App.css";
import User from "./Useer";
import Menu from "./Menu";

function App() {
  let data = "kabeer necrox"

  function Apple()
  {  
    data = "necrox"
    alert(data)
  }
  return (
    <>
      <div className="App">
       <h1>{data}</h1>

        <button onClick={()=>Apple()}>click me</button>
      </div>

      <div className="menu">
        <Menu />
      </div>
    </>
  );
}

export default App;
