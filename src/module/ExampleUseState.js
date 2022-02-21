import { Button } from "antd";
import { useState, memo } from "react";
function ExampleUseState() {
  const [count, setCounnt] = useState(0);
  console.log("ExampleUseState re-render");
  const handleCount = () => {
    setCounnt(count + 1);
  };
  return (
    <div className="ExampleUseState">
      <h1>ExampleUseState.....................</h1>
      <Button onClick={handleCount} type="primary">
        Example Use State
      </Button>
      <h1>Clicked count : {count}</h1>
    </div>
  );
}

export default memo(ExampleUseState);
