import { useReducer, memo } from "react";
import { Button } from "antd";
function ExampleUseReducer() {
  const initialState = 0;
  const actionConst = {
    COUNT_UP: "up",
    COUNT_DOWN: "down",
  };
  const reduce = (state, typeaction) => {
    switch (typeaction) {
      case "up":
        return state + 1;
      case "down":
        return state - 1;
      default:
        return state;
    }
  };
  const hadleUp = () => {
    dispatch(actionConst.COUNT_UP);
  };
  const hadleDown = () => {
    dispatch(actionConst.COUNT_DOWN);
  };

  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div className="ExampleUseReducer">
      <h1>ExampleUseReducer.....</h1>
      <h1> {state} </h1>
      <Button onClick={hadleUp} type="primary">
        up
      </Button>
      <Button onClick={hadleDown} type="primary">
        down
      </Button>
    </div>
  );
}

export default memo(ExampleUseReducer);
