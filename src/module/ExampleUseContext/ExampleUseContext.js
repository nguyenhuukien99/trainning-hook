import { Button } from "antd";
import { createContext, memo, useState } from "react";
import Count from "./count";
export const containerContex = createContext();
function ExampleUseContext() {
  console.log("ExampleUseContext re-render");
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const exampleUseCallback = () => {
    console.log("memo Render");
  };
  return (
    <containerContex.Provider value={count}>
      <div className="exampleUseEffect">
        <h1>ExampleUseContext.....................</h1>
      </div>
      <Count></Count>
      <Button onClick={handleCount} type="primary">
        Clicked
      </Button>
    </containerContex.Provider>
  );
}

export default memo(ExampleUseContext);
