import { useState, memo, useCallback } from "react";
import { Button } from "antd";
import Count from "./count";
function ExampleUseCallback() {
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
    setArray([...array, count]);
  };

  const exampleUseCallback = useCallback(() => {}, []);
  return (
    <div>
      <div className="exampleUseEffect">
        <h1>ExampleUseCallback.....................</h1>
      </div>
      <h1>Clicked : {count}</h1>
      <Count callback={exampleUseCallback}></Count>
      <Button onClick={handleCount} type="primary">
        Plus
      </Button>
    </div>
  );
}

export default memo(ExampleUseCallback);
