//реализовать счетчик который увеличивается каждую секунду при этом когда наводят он должен останавливаться но при этом
// продолжать увеличиватся в фоновом режиме и когда мы убираем курсор показать что натикал и продолжить дальше

// import React from "react";

// export const Deni = () => {
//  const counter = 0;

//   return (
//     <div className="den">
//       <h1>Счётчик {counter}</h1>
//     </div>
//   );
// };

//------------------------------------------------------------------------------------------------------//

import React from "react";

export const Deni = () => {
 const counter = 0;

  return (
    <div className="den">
      <h1>Счётчик {counter}</h1>
    </div>
  );
};


//-----------------------решение с работой в фоновом режиме----------------------------------------------//

// import React, { useState, useEffect } from "react";

// export const Deni = () => {
//   const [currentCounter, setCurrentCounter] = useState(0);
//   const [backgroundCounter, setBackgroundCounter] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBackgroundCounter(prevCounter => prevCounter + 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     setCurrentCounter(backgroundCounter);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);

//   };

//   return (
//     <div className="den" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <h1>Счётчик {isHovered ? currentCounter : backgroundCounter}</h1>
//     </div>
//   );
// };
