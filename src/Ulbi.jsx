//rafc
// //https://www.youtube.com/watch?v=hkrmyIecHR0
// import React, { useState } from "react";

// const initList = () => {
//   return Array.from({ length: 200 }, (_el, index) => ({
//     value: Math.random(),
//     label: `row ${index + 1}`,
//   }));
// };

// export const Ulbi = () => {
//   const [list] = useState(initList());

//   const handleUpdate = () => {
//     list[0].value = Math.random();
//   };

//   return (
//     <div>
//       <h1>List App</h1>
//       <Button onClick={handleUpdate}>Update "row 1"</Button>
//       {list.map(({ label, value }) => (
//         <Row label={label} value={value} />
//       ))}
//     </div>
//   );
// }

// function Button(props) {
//   const { children, onClick } = props;

//   return <button onClick={onClick}>{children}</button>;
// }

// function Row(props) {
//   const { label, value } = props;

//   return (
//     <div style={{ marginTop: '8px' }}>
//       <span style={{ marginRight: "20px" }}>{label}: <span>{value}</span></span>
//     </div>
//   );
// }

//--------------------------------------------------------------------//

import React, { useState } from "react";

const initList = () => {
  return Array.from({ length: 200 }, (_el, index) => ({
    value: Math.random(),
    label: `row ${index + 1}`,
  }));
};

export const Ulbi = () => {
  const [list] = useState(initList());

  const handleUpdate = () => {
    list[0].value = Math.random();
  };

  return (
    <div>
      <h1>List App</h1>
      <Button onClick={handleUpdate}>Update "row 1"</Button>
      {list.map(({ label, value }) => (
        <Row label={label} value={value} />
      ))}
    </div>
  );
}

function Button(props) {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
}

function Row(props) {
  const { label, value } = props;

  return (
    <div style={{ marginTop: '8px' }}>
      <span style={{ marginRight: "20px" }}>{label}: <span>{value}</span></span>
    </div>
  );
}

//------------------------------решенный пример

// import React, { useState, memo } from "react";

// const initList = () => {
//     return Array.from({ length: 200 }, (_el, index) => ({
//       value: Math.random(),
//       label: `row ${index + 1}`,
//     }));
//   };

// export const Ulbi = () => {

//   const [list, setList] = useState(() => initList()); //исправил этот момент

//   // //----можно доработать так handleUpdate (gpt)-----------
//   // const handleUpdate = () => {
//   // setList(prevList => {
//   //   const newList = [...prevList]; // Создаем копию предыдущего списка
//   //   newList[0].value = Math.random(); // Обновляем значение первого элемента
//   //   return newList; // Возвращаем новый список
//   // });
//   // }

//------------------------------решение ульби в данном моменте-------
//   const handleUpdate = () => {                     //исправил этот момент
//     setList((prev) =>
//       prev.map((item, i) => {
//         if (i === 0) {
//           return { ...item, value: Math.random() };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <div>
//       <h1>List App</h1>
//       <Button onClick={handleUpdate}>Update "row 1"</Button>
//       {list.map(({ label, value }) => (
//         <Row key={label} label={label} value={value} />   //добавил ключ
//       ))}
//     </div>
//   );
// };

// function Button(props) {
//   const { children, onClick } = props;

//   return <button onClick={onClick}>{children}</button>;
// }

// const Row = memo(function Row(props) {                  //обернул в мемо
//   const { label, value } = props;

//   return (
//     <div style={{ marginTop: "8px" }}>
//       <span style={{ marginRight: "20px" }}>
//         {label}: <span>{value}</span>
//       </span>
//     </div>
//   );
// });
