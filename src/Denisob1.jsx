//https://www.youtube.com/watch?v=yi9zw6AR2MY&list=PLrhM3aznArDIQGokZwNhJSCKMKSg_pWR3&index=19

// import React, { useState, useEffect, useRef } from "react";

// export default function Denisob1() {
//   const [count, setCount] = useState(0);
//   let intervalRef = useRef();

//   const handleClick = () => setCount(count + 1);

//   useEffect(() => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//     intervalRef.current = setInterval(() => setCount(count + 1), 3000);

//   }, []);

//   return (
//     <div className="denisob1">
//       <button onClick={handleClick}>+1</button>
//       <div>{count}</div>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------------------------------------//

import React, { useState, useEffect, useRef } from "react";

export default function Denisob1() {
  const [count, setCount] = useState(0);
  let intervalRef = useRef();

  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => setCount(count + 1), 3000);

  }, []);

  return (
    <div className="denisob1">
      <button onClick={handleClick}>+1</button>
      <div>{count}</div>
    </div>
  );
}

//----------------------------------------------------решение-------------------------------------------------------//
// import React, { useState, useEffect } from "react";

// export default function Denisob1() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => setCount(prevCount => prevCount + 1);

//   useEffect(() => {
  //идентификатор интервального таймера
//     const intervalId = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 3000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div className="denisob1">
//       <button onClick={handleClick}>+1</button>
//       <div>{count}</div>
//     </div>
//   );
// }
