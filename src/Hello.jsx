import "./index.css";
//---------------------------setInterval------------------------------------//
////rafc
// import React, { useState, useEffect } from "react";

// export const Hello = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <div style={{ margin: "auto", fontSize: "120px" }}>{count}</div>;
// };

// //---------------------дочерний useEffect срабатывает раньше чем родительский-----------------//

// import React from "react";

// export const Hello = () => {
//   React.useEffect(() => {
//     console.log(1);
//   }, []);
//   console.log(2);
//   return <ComeComponentInner />;
// };

// export const ComeComponentInner = () => {
//   React.useEffect(() => {
//     console.log(3);
//   }, []);
//   console.log(4);
//   return <div>Какой-то текст</div>;
// }; // 2,4,3,1

//---------------------------------------порядок вывода в консоль----------------------------------------------------//
//useLayoutEffect-будет вызван после каждого рендера компонента, но перед тем, как React отрисует обновленный DOM на экране.

// import React, { useState, useEffect, useLayoutEffect } from "react";

// export const Hello = () => {
//   const [count, setCount] = useState(0);

//   useLayoutEffect(() => {
//     console.log("each render 1");
//   });

//   console.log("each render 2");

//   useEffect(() => {
//     console.log("each render 3");
//   });

//   return (
//     <>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
//     </>
//   );
// };

//---------------------------------------порядок вывода в консоль----------------------------------------------------//
//если есть зависимости в useEffect то функция очисти сработает перед следующим вызовом useEffect если нет 
//зависимостей  то вызывается перед размантированием(надо добавить [count] тогда выводит each render 3)

// import React, { useState, useEffect, useLayoutEffect } from "react";

// export const Hello = () => {
//   const [count, setCount] = useState(0);

//   useLayoutEffect(() => console.log("each render 1"));

//   console.log("each render 2");

//   useEffect(() => () => console.log("each render 3"), []);

//   return (
//     <>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
//     </>
//   );
// };



//---------------------------в дочерний компонент должны передаваться только четные числа--------------------------------//
// import React, { useState } from "react";
 
//  export const Hello = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => setCount((prevCount) => prevCount + 1);
  
//     return (
//       <>
//         Parent: {count} <br />
//         <SubElement clicker={increment} count={count} />
//       </>
//     );
//   };
  
//   const SubElement = ({ clicker, count }) => {
//     return (
//       <>
//         Sub: {count} <br />
//         <button onClick={clicker}>Increment</button>
//       </>
//     );
//  }


//----------------------------------решение
import React, { useState } from "react";
 
 export const Hello = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prevCount) => prevCount + 1);
  
    return (
      <>
        Parent: {count} <br />
        <SubElement clicker={increment} count={count} />
      </>
    );
  };
  
  const SubElement = ({ clicker, count }) => {
    return (
      <>
        Sub: {count} <br />
        <button onClick={clicker}>Increment</button>
      </>
    );
 }
 

