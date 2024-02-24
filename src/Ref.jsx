import React from "react";
import "./index.css";

export const Ref = () => {
  const [counter, setCounter] = React.useState(0);
  const counterRef = React.useRef(0);
  return (
    <div className="a">
      <button className="ref" onClick={() => counterRef.current ++}>
        Нажми на меня
      </button>
      <button className="ref" onClick={() => setCounter(counterRef.current)}>На меня нажали {counter} раз</button>
    </div>
  );
};
