//https://www.youtube.com/watch?v=yyDUuS-SBdw    надо завершить на тайпскрипт typescript

// import React from "react";
// import "./index.css";

// const data = [
//   {
//     id: 1,
//     name: "Node 1",
//     children: [
//       {
//         id: 2,
//         name: "Node 1.1",
//         children: [
//           {
//             id: 3,
//             name: "Node 1.1.1"
//           },
//           {
//             id: 4,
//             name: "Node 1.1.2"
//           }
//         ]
//       },
//       {
//         id: 5,
//         name: "Node 1.2",
//         children: [
//           {
//             id: 6,
//             name: "Node 1.2.1"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 7,
//     name: "Node 2",
//     children: [
//       {
//         id: 8,
//         name: "Node 2.1"
//       }
//     ]
//   },
//   {
//     id: 9,
//     name: "Node 3"
//   }
// ];

// const getData = () => {
//   // API возвращает Promise
//   return API(data);
// };

// export const Codsob1 = () => {
//   return (
//     <div className="code">
//       <h1>App</h1>
//     </div>
//   );
// }
//---------------------------------------------------------------------------------------------------------------------------//

import React from "react";
import "./index.css";

const data = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
        children: [
          {
            id: 3,
            name: "Node 1.1.1"
          },
          {
            id: 4,
            name: "Node 1.1.2"
          }
        ]
      },
      {
        id: 5,
        name: "Node 1.2",
        children: [
          {
            id: 6,
            name: "Node 1.2.1"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Node 2",
    children: [
      {
        id: 8,
        name: "Node 2.1"
      }
    ]
  },
  {
    id: 9,
    name: "Node 3"
  }
];

const getData = () => {
  // API возвращает Promise
  return API(data);
};

export const Codsob1 = () => {
  return (
    <div className="code">
      <h1>App</h1>
    </div>
  );
}

//---------------------------------------------мое решение стеком получаю массив из имен и id -------------------------------------//

// import React from "react";
// import "./index.css";

// const data = [
//   {
//     id: 1,
//     name: "Node 1",
//     children: [
//       {
//         id: 2,
//         name: "Node 1.1",
//         children: [
//           {
//             id: 3,
//             name: "Node 1.1.1",
//           },
//           {
//             id: 4,
//             name: "Node 1.1.2",
//           },
//         ],
//       },
//       {
//         id: 5,
//         name: "Node 1.2",
//         children: [
//           {
//             id: 6,
//             name: "Node 1.2.1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Node 2",
//     children: [
//       {
//         id: 8,
//         name: "Node 2.1",
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Node 3",
//   },
// ];

// const func = (arr) => {
//   const result = [];
//   const stack = [...arr.reverse()];

//   while (stack.length > 0) {
//     const node = stack.pop();

//     if (node.name && node.id) {
//       result.push({name:node.name, id:node.id});
//     }
//     if (node.children?.length) {
//       stack.push(...node.children.reverse());
//     }
//   }
//   return result;
// };

// const dataName = func(data);

// export const Codsob1 = () => {

//   return (
//     <div className="code">
//       <h1>App</h1>
//       <ul>
//         {dataName.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//---------------------------------------------------мое решение с вынесенной рекурсией---------------------------------//

// import React from "react";
// import "./index.css";

// const data = [
//   {
//     id: 1,
//     name: "Node 1",
//     children: [
//       {
//         id: 2,
//         name: "Node 1.1",
//         children: [
//           {
//             id: 3,
//             name: "Node 1.1.1"
//           },
//           {
//             id: 4,
//             name: "Node 1.1.2"
//           }
//         ]
//       },
//       {
//         id: 5,
//         name: "Node 1.2",
//         children: [
//           {
//             id: 6,
//             name: "Node 1.2.1"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 7,
//     name: "Node 2",
//     children: [
//       {
//         id: 8,
//         name: "Node 2.1"
//       }
//     ]
//   },
//   {
//     id: 9,
//     name: "Node 3"
//   }
// ];

// const func = data => {
//   const result = [];

//   for(const item of data){
//     if(item.name && item.id){
//       result.push({name:item.name , id:item.id})
//     }
//     if(item.children){
//       result.push(...func(item.children))
//     }
//   }
//   return result
// }

// const result = func(data)

// export const Codsob1 = () => {
//   return (
//     <div className="code">
//       <h1>App</h1>
//       <ul>
//         {result.map(elem => (
//           <li key={elem.id}>{elem.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//-----------------------------------------------------решение из видео-------------------------------------------------//
// import React from "react";
// import "./index.css";

// const data = [
//   {
//     id: 1,
//     name: "Node 1",
//     children: [
//       {
//         id: 2,
//         name: "Node 1.1",
//         children: [
//           {
//             id: 3,
//             name: "Node 1.1.1",
//           },
//           {
//             id: 4,
//             name: "Node 1.1.2",
//           },
//         ],
//       },
//       {
//         id: 5,
//         name: "Node 1.2",
//         children: [
//           {
//             id: 6,
//             name: "Node 1.2.1",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Node 2",
//     children: [
//       {
//         id: 8,
//         name: "Node 2.1",
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Node 3",
//   },
// ];

// const render = (data) => (
//   <ul>
//     {data.map((item) => (<li key = {item.id} >
//         {item.name}
//         {item.children?.length && render(item.children)}
//       </li>
//     ))}
//   </ul>
// );

// export const Codsob1 = () => {
//   return (
//     <div className="code">
//       <h1>App</h1>
//       {render(data)}
//     </div>
//   );
// }
