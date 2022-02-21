import "./App.css";
import { Button, Space } from "antd";
import { useState } from "react";
import ExampleuseState from "./module/ExampleUseState";
import ExampleUseEffect from "./module/ExampleUseEffect";
import ExampleUseLayoutEffect from "./module/ExampleUseLayoutEffect";
import ExampleUseContext from "./module/ExampleUseContext/ExampleUseContext";
import ExampleUseMemo from "./module/ExampleUseMemo";
import ExampleUseCallback from "./module/ExampleUseCallback/ExampleUseCallback";
import ExampleuseImperativeHandle from "./module/ExampleuseImperativeHandle/ExampleuseImperativeHandle";
import ExampleUseReducer from "./module/ExampleUseReducer";

import ExampleUseRef from "./module/ExampleUseRef";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Space
        style={{ marginTop: "48px", marginBottom: "48px" }}
        size={"large"}
        direction={"vertical"}
      >
        <Button onClick={handleCount} type="primary">
          re-render
        </Button>
        <ExampleuseState></ExampleuseState>
        <ExampleUseEffect></ExampleUseEffect>
        <ExampleUseLayoutEffect></ExampleUseLayoutEffect>
        <ExampleUseContext></ExampleUseContext>
        <ExampleUseMemo></ExampleUseMemo>
        <ExampleUseCallback></ExampleUseCallback>
        <ExampleUseRef></ExampleUseRef>
        <ExampleuseImperativeHandle></ExampleuseImperativeHandle>
        <ExampleUseReducer></ExampleUseReducer>
      </Space>
    </div>
  );
}

export default App;
