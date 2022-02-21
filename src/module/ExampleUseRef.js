import { Button } from "antd";
import { useState, useRef, memo } from "react";
function ExampleUseRef() {
  const [count, setCounnt] = useState(0);
  let notUseRef = 1;
  let ref = useRef(1);
  let inputRef = useRef("");
  const handleAutoFill = () => {
    inputRef.current.focus();
    inputRef.current.value = "autoFill";
  };

  const handleCount = () => {
    setCounnt(count + 1);
    ref.current += 1;
    notUseRef += 1;
  };

  return (
    <div className="ExampleUseRef">
      <h1>ExampleUseRef.....................</h1>
      <Button onClick={handleCount} type="primary">
        Example Use Ref
      </Button>
      <br></br>
      <input ref={inputRef}></input>
      <Button onClick={handleAutoFill} type="primary">
        Auto Fill
      </Button>
      <h1>ref : {ref.current}</h1>
      <h1>notUseRef : {notUseRef}</h1>
    </div>
  );
}

export default memo(ExampleUseRef);
