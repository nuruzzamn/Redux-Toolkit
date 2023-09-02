import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fDecrement, fIncreaseByNumber, fIncrement, fReset } from "./CounterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count : {count}</h2>

      <button
        onClick={() => {
          dispatch(fIncrement());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(fDecrement());
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(fReset());
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(fIncreaseByNumber(50));
        }}
      >
        Increment by 50
       </button>

    </div>
  );
};

export default CounterView;
