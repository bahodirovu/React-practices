import React from "react";
import "./quiz.css";

function Result({ correct }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>Вы отгадали {correct} ответа из 3</h2>
      <button className="bten" onClick={() => window.location.reload(false)}>
        Попробовать снова
      </button>
    </div>
  );
}
export default Result;
