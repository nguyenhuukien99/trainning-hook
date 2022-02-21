import { useContext, memo } from "react";
import { containerContex } from "./ExampleUseContext";
function Count() {
  const count = useContext(containerContex);
  return (
    <div className="exampleUseEffect">
      <h1>Clicked : {count}</h1>
    </div>
  );
}

export default memo(Count);
