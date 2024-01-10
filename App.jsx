import { useState } from 'react'
function App() {
   let [Count,setCount]=useState(0)
  const decValue = () => {
    Count = Count-1;
    setCount(Count);
  }
  function addValue() {

    Count = Count + 1;
    setCount(Count);

  }
  return (
   <><h1>Sudhir yadav</h1>
   <h3>Count {Count} </h3>
   <button onClick={addValue}>
    Add value {Count}</button>
   <button onClick={decValue}>Dec value {Count}</button>
   </>
  )
}

export default App
