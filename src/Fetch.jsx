////// https://jsonplaceholder.typicode.com/users
// import React from 'react'
// import "./index.css";


// export const Fetch = () => {
//   return (
//     <div className='fetch'> Fetch</div>
//   )
// }

//-----------------------------------------------------------------------------------------------------------------//
// https://jsonplaceholder.typicode.com/users


import React from 'react'
import "./index.css";


export const Fetch = () => {
  return (
    <div className='fetch'> Fetch</div>
  )
}












//-----------------------------------------------решение----------------------------------------------------------//
// import React from "react";
// import "./index.css";


// //функция stack  в качестве примера как в нее передать данные из fetch запроса
// // const func = (arr) => {
// //     const result = [];
// //     const stack = [...arr.reverse()];
  
// //     while (stack.length > 0) {
// //       const node = stack.pop();
  
// //       if (node.name && node.id) {
// //         result.push({name:node.name, id:node.id});
// //       }
// //       if (node.children?.length) {
// //         stack.push(...node.children.reverse());
// //       }
// //     }
// //     return result;
// //   };

// export const Fetch = () => {
//   const [users, setUsers] = React.useState([]);

//   React.useEffect(() => {
//     const fetchusers = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         setUsers(data);
//         // const processedData = func(data); // вот это передает данные в функцию обработчик это просто для примера
//         // setUsers(processedData); //а это его результаты в setUsers   это просто для примпера
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchusers();
//   }, []);

//   return (
//     <div className="fetch">
//       <ul>{users?.map((user) => (
//         <li key = {user.id}>{user.name}</li>
//       ))}</ul>
//     </div>
//   );
// };
