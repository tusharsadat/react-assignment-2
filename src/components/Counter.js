import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button
            className="btn card__btn"
            disabled={count === 5}
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="btn card__btn"
            disabled={count === -5}
            onClick={handleDecrement}
          >
            -
          </button>
          <button className="btn card__btn" onClick={() => setCount(0)}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
