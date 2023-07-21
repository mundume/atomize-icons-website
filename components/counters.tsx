// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import styles from "./counters.module.css";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className="text-emerald-500">
        Clicked {count} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
