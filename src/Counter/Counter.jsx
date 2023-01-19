import React, { useState } from "react";


function Counter() {
  const [count,setCount] = useState(0);

  const onClickPlus = () =>{
    setCount(count + 1);
  }

  const onClickMinus = () =>{
    setCount(count - 1);
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center fs-2">Counter App</h2>
      <h2 className="text-center fs-1">{count}</h2>
      <div className="text-center ">
        <button onClick={onClickPlus} className="m-2 btn btn-primary mx-auto">
          Increment
        </button>
        <button onClick={onClickMinus} className="m-2 btn btn-danger">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
