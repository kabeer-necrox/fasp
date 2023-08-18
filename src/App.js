import react, { useState } from "react";

function App() {
 const [status, setStatus] = react.useState(true);
  
  return (
    <div>
     {
      status? <h1>hello world!!!</h1>:null
     }

     <button  onClick={()=>setStatus(!true)}>toggle</button>
    </div>
  );
}

export default App;







