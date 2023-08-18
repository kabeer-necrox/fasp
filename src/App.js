import react, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div>
      {
        print?
        <h1>data</h1>
        :null
      }
      <h1>{data}</h1>
      <input
        type="text"
        placeholder="enter your data here"
        onChange={getData}
      />
      <button onClick={()=> setPrint(true)}>print data</button>
    </div>
  );
}

export default App;







