import { Button } from "antd";
import { useState, useMemo, memo } from "react";
function ExampleUseMemo() {
  const [render, setRender] = useState(true);
  const [count, setCounnt] = useState(1);
  const [array, setArray] = useState([1]);
  const pushArray = () => {
    setCounnt(count + 1);
    setArray([...array, count]);
  };
  const hamdlerender = () => {
    setRender(!render);
  };
  const notUsing = array.reduce((sum, num) => {
    console.log("You are not using useMemo");
    return sum + num;
  }, 0);
  const using = useMemo(() => {
    const result = array.reduce((sum, num) => {
      console.log("You are using useMemo");
      return sum + num;
    }, 0);
  }, [array]);

  return (
    <div className="ExampleUseMemo">
      <h1>ExampleUseMemo.....................</h1>
      <Button
        style={{ marginRight: "16px" }}
        onClick={pushArray}
        type="primary"
      >
        UsinguseMemo
      </Button>
      <Button onClick={hamdlerender} type="primary">
        re-render
      </Button>
    </div>
  );
}

export default memo(ExampleUseMemo);
