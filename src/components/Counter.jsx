import React from "react";
import { useState } from "react";

const Counter = () => {
  const [sum, setSum] = useState(0);
  const [billInc, setBillInc] = useState(0);
  const [billDes, setBillDes] = useState(0);

  function increment() {
    setBillInc(billInc + 1);
    setSum(sum + 1);
  }

  function descrement() {
    setBillDes(billDes - 1);
    setSum(sum + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Вы нажали {sum}</p>
      <p>Сумма {billInc + billDes}</p>
      <p>Вы нажали {billInc} "PLUS" раз</p>
      <p>Вы нажали {billDes} "MINUS" раз</p>

      <button onClick={increment}>PLUS </button>
      <button onClick={descrement}>MINUS </button>
    </div>
  );
};

export default Counter;
