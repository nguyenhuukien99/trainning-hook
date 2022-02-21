import { Button, Row, Col } from "antd";
import { useState, useEffect, useLayoutEffect, memo } from "react";
function ExampleUseLayoutEffect() {
  const [count1, setCounnt1] = useState(0);
  const [count2, setCounnt2] = useState(0);

  const handleCount = () => {
    setCounnt1(count1 + 2);
    setCounnt2(count2 + 2);
  };
  useEffect(() => {
    if (count1 > 10) {
      setCounnt1(0);
    }
  }, [count1]);
  useLayoutEffect(() => {
    if (count2 > 10) {
      setCounnt2(0);
    }
  }, [count2]);

  return (
    <div className="exampleUseEffect">
      <h1>ExampleUseLayoutEffect.....................</h1>
      <Row justify="start">
        <Col span={12}>
          <h1>useEffect {count1}</h1>
        </Col>
        <Col span={12}>
          <h1>UseLayoutEffect {count2}</h1>
        </Col>
      </Row>
      <Button onClick={handleCount} type="primary">
        Clicked
      </Button>
    </div>
  );
}

export default memo(ExampleUseLayoutEffect);
