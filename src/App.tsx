import React, { useReducer } from "react";

function App() {
  const [total, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "1":
        console.log("Action:", action.type);
        return state + 1;
      case "2":
        console.log("Action:", action.type);
        return state + 2;
      case "3":
        console.log("Action:", action.type +"  Text:", action.text);
        return state;
    }
  }, 10);

  return (
    <div>
      Total: {total}
      <button onClick={() => dispatch({ type: "1"})}>Add 1</button>
      <button onClick={() => dispatch({ type: "2"})}>Add 2</button>
      <button onClick={() => dispatch({ type: "3", text: "coucou" })}>
        Coucou
      </button>
    </div>
  );
}

export default App;
