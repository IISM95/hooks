////https://www.youtube.com/watch?v=Il9IFuCiq6U

// import React from "react";
// import "./index.css";

// export const Codsob2 = () => {
//   return (
//     <div className="codsob2">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>

//       <First />
//     </div>
//   );
// };

// const First = () => {
//   const listData = [
//     { id: 1, name: "Element 1", parentId: null },
//     { id: 2, name: "Element 2", parentId: 1 },
//     { id: 3, name: "Element 3", parentId: 2 },
//     { id: 4, name: "Element 4", parentId: 3 },
//     { id: 5, name: "Element 5", parentId: 2 },
//     { id: 6, name: "Element 6", parentId: 4 },
//     { id: 7, name: "Element 7", parentId: 1 },
//     { id: 8, name: "Element 8", parentId: null },
//     { id: 9, name: "Element 9", parentId: 4 },
//     { id: 10, name: "Element 10", parentId: 8 },
//     { id: 11, name: "Element 11", parentId: 2 },
//     { id: 12, name: "Element 12", parentId: 5 },
//     { id: 14, name: "Element 14", parentId: 3 },
//     { id: 15, name: "Element 15", parentId: 9 },
//     { id: 17, name: "Element 17", parentId: 7 },
//     { id: 18, name: "Element 18", parentId: 14 },
//     { id: 19, name: "Element 19", parentId: 8 },
//     { id: 20, name: "Element 20", parentId: 16 },
//     { id: 22, name: "Element 22", parentId: 17 },
//     { id: 24, name: "Element 24", parentId: 20 },
//     { id: 25, name: "Element 25", parentId: 12 },
//     { id: 26, name: "Element 26", parentId: 22 },
//     { id: 27, name: "Element 27", parentId: 6 },
//     { id: 28, name: "Element 28", parentId: 10 },
//     { id: 29, name: "Element 29", parentId: 18 },
//     { id: 30, name: "Element 30", parentId: 27 },
//   ];

//   const highestElements = listData.filter((el) => el.parentId === null);

//   return (
//     <div className="Codsob22">
//       <ul>
//         <li>Element 1</li>
//       </ul>
//     </div>
//   );
// };

//----------------------------------------------------------------------------------------------------------------------//

import React from "react";
import "./index.css";

export const Codsob2 = () => {
  return (
    <div className="codsob2">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <First />
    </div>
  );
};

const First = () => {
  const listData = [
    { id: 1, name: "Element 1", parentId: null },
    { id: 2, name: "Element 2", parentId: 1 },
    { id: 3, name: "Element 3", parentId: 2 },
    { id: 4, name: "Element 4", parentId: 3 },
    { id: 5, name: "Element 5", parentId: 2 },
    { id: 6, name: "Element 6", parentId: 4 },
    { id: 7, name: "Element 7", parentId: 1 },
    { id: 8, name: "Element 8", parentId: null },
    { id: 9, name: "Element 9", parentId: 4 },
    { id: 10, name: "Element 10", parentId: 8 },
    { id: 11, name: "Element 11", parentId: 2 },
    { id: 12, name: "Element 12", parentId: 5 },
    { id: 14, name: "Element 14", parentId: 3 },
    { id: 15, name: "Element 15", parentId: 9 },
    { id: 17, name: "Element 17", parentId: 7 },
    { id: 18, name: "Element 18", parentId: 14 },
    { id: 19, name: "Element 19", parentId: 8 },
    { id: 20, name: "Element 20", parentId: 16 },
    { id: 22, name: "Element 22", parentId: 17 },
    { id: 24, name: "Element 24", parentId: 20 },
    { id: 25, name: "Element 25", parentId: 12 },
    { id: 26, name: "Element 26", parentId: 22 },
    { id: 27, name: "Element 27", parentId: 6 },
    { id: 28, name: "Element 28", parentId: 10 },
    { id: 29, name: "Element 29", parentId: 18 },
    { id: 30, name: "Element 30", parentId: 27 },
  ];

  const highestElements = listData.filter((el) => el.parentId === null);

  return (
    <div className="Codsob22">
      <ul>
        <li>Element 1</li>
      </ul>
    </div>
  );
};


//----------------------------------------------------решение-----------------------------------------------------------//

// import React from "react";
// import "./index.css";

// export const Codsob2 = () => {
//   return (
//     <div className="codsob2">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>

//       <First />
//     </div>
//   );
// };

// const First = () => {
//   const listData = [
//     { id: 1, name: "Element 1", parentId: null }, //parentId указывает на id родителя
//     { id: 2, name: "Element 2", parentId: 1 }, //у этого родитель Element 1
//     { id: 3, name: "Element 3", parentId: 2 }, //у этого родитель Element 2
//     { id: 4, name: "Element 4", parentId: 3 },
//     { id: 5, name: "Element 5", parentId: 2 }, //у этого родитель Element 2
//     { id: 6, name: "Element 6", parentId: 4 },
//     { id: 7, name: "Element 7", parentId: 1 }, //у этого родитель Element 1
//     { id: 8, name: "Element 8", parentId: null },
//     { id: 9, name: "Element 9", parentId: 4 },
//     { id: 10, name: "Element 10", parentId: 8 },
//     { id: 11, name: "Element 11", parentId: 2 }, //у этого родитель Element 2
//     { id: 12, name: "Element 12", parentId: 5 },
//     { id: 14, name: "Element 14", parentId: 3 },
//     { id: 15, name: "Element 15", parentId: 9 },
//     { id: 17, name: "Element 17", parentId: 7 },
//     { id: 18, name: "Element 18", parentId: 14 },
//     { id: 19, name: "Element 19", parentId: 8 },
//     { id: 20, name: "Element 20", parentId: 16 },
//     { id: 22, name: "Element 22", parentId: 17 },
//     { id: 24, name: "Element 24", parentId: 20 },
//     { id: 25, name: "Element 25", parentId: 12 },
//     { id: 26, name: "Element 26", parentId: 22 },
//     { id: 27, name: "Element 27", parentId: 6 },
//     { id: 28, name: "Element 28", parentId: 10 },
//     { id: 29, name: "Element 29", parentId: 18 },
//     { id: 30, name: "Element 30", parentId: 27 },
//   ];

//   const renderElement = (parentId) => {
////parentId => null
////parentId => 1
//     const children = listData.filter((el) => el.parentId === parentId);

////children=>[{ id: 1, name: 'Element 1', parentId: null },{ id: 8, name: 'Element 8', parentId: null }]
////children=>[{ id: 2, name: "Element 2", parentId: 1 },{ id: 7, name: "Element 7", parentId: 1 },]
//     if (children.length === 0) return null;

//     return (
//       <div className="hren">
//         <ul>
//           {children.map((child) => (
//             <li key={child.id}>
//               {child.name}
//               {renderElement(child.id)}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <div className="Codsob22">
//       <ul>{renderElement(null)}</ul>
//     </div>
//   );
// };
