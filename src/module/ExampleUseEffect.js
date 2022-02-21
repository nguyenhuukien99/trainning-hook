import { Button } from "antd";
import { useState, memo, useEffect } from "react";

function ExampleUseEffect() {
  const [count, setCounnt] = useState(0);
  const [reRender, setReRender] = useState(false);
  console.log("ExampleUseEffect re-render");
  const handleCount = () => {
    setCounnt(count + 1);
  };
  const handleReRender = () => {
    setReRender(!reRender);
  };

  useEffect(() => {
    console.log("useEffect type 1");
  });
  useEffect(() => {
    console.log("useEffect type 2");
  }, []);
  useEffect(() => {
    console.log("useEffect type 3");
  }, [count]);
  return (
    <div className="exampleUseEffect">
      <h1>exampleUseEffect.....................</h1>
      <Button onClick={handleReRender} type="primary">
        example Use Effect type 1
      </Button>
      <br />
      <Button onClick={handleCount} type="primary">
        example Use Effect type 3
      </Button>
      <h1>Clicked count : {count}</h1>
    </div>
  );
}

export default memo(ExampleUseEffect);
