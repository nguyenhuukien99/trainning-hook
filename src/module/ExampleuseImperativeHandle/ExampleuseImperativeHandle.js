import { memo, useRef } from "react";
import Content from "./content";

function ExampleuseImperativeHandle() {
  const inputRef = useRef();
  return (
    <div className="ExampleuseImperativeHandle">
      <h1>ExampleuseImperativeHandle.....................</h1>
      <Content ref={inputRef}></Content>
    </div>
  );
}

export default memo(ExampleuseImperativeHandle);
