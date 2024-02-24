////https://www.youtube.com/watch?v=mpECxcDjvgE

/*1)можно ещё убрать перерендер кнопки, передавая в setNames функцию:
setNames((prev) => [newName, ...prev])*/
/*2)Плохая практика используется на строке 30 нельзя добавлять в начало массива элемент 
очень негативно будут смотреть если так оставить, нужно просто значение поменять местами 
и тогда сразу решится вопрос с пере рендером списка. */

// import React, { useState } from "react";

// const ListItem = ({ name }) => {
//   console.log("ListItem перерендер");
//   return <p>{name}</p>;
// };

// const Button = ({ onClick, children }) => {
//   console.log("Button перерендер");
//   return <button onClick={onClick}>{children}</button>;
// };

// const List = ({ list }) => {
//   return (
//     <div>
//       {list.map((item, index) => (
//         <ListItem name={item} key={index} />
//       ))}
//     </div>
//   );
// };

// export const Render = () => {
//   const [names, setNames] = useState(["Bepa", "Надежда", "Лю"]);

//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleAddName =  () => {
//     setNames([name, ...names]);
//   };

//   console.log("Арр перерендер");

//   return (
//     <div className="App">
//       <input onChange={handleChange} type="text" />
//       <Button onClick={handleAddName}>Добавить</Button>
//       <List list={names} />
//     </div>
//   );
// };

//--------------------------------------------------------------------------------------------//

import React, { useState } from "react";

const ListItem = ({ name }) => {
  console.log("ListItem перерендер");
  return <p>{name}</p>;
};

const Button = ({ onClick, children }) => {
  console.log("Button перерендер");
  return <button onClick={onClick}>{children}</button>;
};

const List = ({ list }) => {
  return (
    <div>
      {list.map((item, index) => (
        <ListItem name={item} key={index} />
      ))}
    </div>
  );
};

export const Render = () => {
  const [names, setNames] = useState(["Bepa", "Надежда", "Лю"]);

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAddName =  () => {
    setNames([name, ...names]);
  };

  console.log("Арр перерендер");

  return (
    <div className="App">
      <input onChange={handleChange} type="text" />
      <Button onClick={handleAddName}>Добавить</Button>
      <List list={names} />
    </div>
  );
};

//------------------------------------решение-------------------------------------------------//

// import React, { useState, memo, useCallback, useRef } from "react";

// const ListItem = memo(({ name }) => {
//   console.log("ListItem перерендер");
//   return <p>{name}</p>;
// });

// const Button = memo(({ onClick, children }) => {
//   console.log("Button перерендер");
//   return <button onClick={onClick}>{children}</button>;
// });

// const List = memo(({ list }) => {
//   return (
//     <div>
//       {list.map((item) => (
//         <ListItem name={item} key={item} />
//       ))}
//     </div>
//   );
// });

// export const Render = () => {
//   const [names, setNames] = useState(["Bepa", "Надежда", "Лю"]);

//   const inputRef = useRef(null)

//   const handleAddName = useCallback(() => {
//     const newName = inputRef.current.value;
//     setNames((prev) => [newName, ...prev]);
//     inputRef.current.value =''
//   },[names, setNames,inputRef]);

//   console.log("Арр перерендер");

//   return (
//     <div className="App">
//       <input ref ={inputRef} type="text" />
//       <Button onClick={handleAddName}>Добавить</Button>
//       <List list={names} />
//     </div>
//   );
// };
