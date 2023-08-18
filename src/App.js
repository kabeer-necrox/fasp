import logo from "./logo.svg";
import "./App.css";
import User from "./Useer";
import Menu from "./Menu";
import Students from "./Students";

function App() {
  let data = "kabeer necrox"

  function Apple()
  {  
    data = "necrox"
    alert(data)
  }

  function getData(e){
    console.log(e.target.value)
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

      <div className="Students">
        <Students name="pakistan"/>
        <Students name="india"/>
        <Students name="imrica"/>
        <Students name="afghan"/>
        <Students email="necrox@test.com" />
      </div>


      <div className="inputData">
        <input type="text" placeholder="enter you data" onChange={getData}/>
      </div>
    </>
  );
}

export default App;
