import React, { useEffect, useState, useCallback, Component } from "react";

// export const Aub = () => {
//     const [state, setState] = useState({ counter: 0 });
//     const [buttonTitle, setButtonTitle] = useState('');

//     const handleClick = useCallback(() => {
//       setState(prevState => {
//         const currentState = {prevState};
//         currentState.counter += 1;

//         return currentState;
//       });
//     }, []);

//     useEffect(() => {
//       const { counter } = state;

//       if (!counter) return;
//       setButtonTitle('Нажата');
//     }, [state]);

//     return (
//       <button onClick={handleClick}>{buttonTitle}</button>
//     );
// }

//-------------------------------------------------------------------------------------------------------------//

export const Aub = () => {
    const [state, setState] = useState({ counter: 0 });
    const [buttonTitle, setButtonTitle] = useState('');

    const handleClick = useCallback(() => {
      setState(prevState => {
        const currentState = prevState;
        currentState.counter += 1;

        return currentState;
      });
    }, []);

    useEffect(() => {
      const { counter } = state;

      if (!counter) return;
      setButtonTitle('Нажата');
    }, [state]);

    return (
      <button onClick={handleClick}>{buttonTitle}</button>
    );
}

//--------------------------------решение--------------------------------------------//
// import React, { useEffect, useState, useCallback } from "react";

// export const Aub = () => {
//   const [state, setState] = useState({ counter: 0 });
//   const [buttonTitle, setButtonTitle] = useState("");

//   const handleClick = useCallback(() => {
//     setState((prevState) => ({ ...prevState, counter: prevState.counter + 1 }));
//   }, []);
//   useEffect(() => {
//     const { counter } = state;

//     if (!counter) return;
//     setButtonTitle("Нажата");
//   }, [state]);

//   return <button onClick={handleClick}>{buttonTitle}</button>;
// };
