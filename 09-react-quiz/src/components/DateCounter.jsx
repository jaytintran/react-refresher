import React, { useReducer } from "react";

// const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  // action is an object with a type and a payload
  // type is a string, payload is a number
  console.log("state: ", state, "action: ", action);

  const { type, payload } = action;

  switch (type) {
    case "dec":
      return { ...state, count: state.count - payload };
    case "inc":
      return { ...state, count: state.count + payload };
    case "setCount":
      return { ...state, count: payload };
    case "reset":
      return { ...state, count: 0, step: 1 };
    case "setStep":
      return { ...state, step: payload };
    default:
      return state;
  }
}

const DateCounter = () => {
  //   const [step, dispatchStep] = useReducer(reducer, 1);
  //   const [count, dispatch] = useReducer(reducer, 0);

  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = () => {
    dispatch({ type: "dec", payload: state.step });
  };

  const inc = () => {
    dispatch({ type: "inc", payload: state.step });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default DateCounter;
