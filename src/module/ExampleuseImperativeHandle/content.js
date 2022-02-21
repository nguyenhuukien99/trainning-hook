import { forwardRef, useImperativeHandle, useRef } from "react";
function Content(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    blur() {
      inputRef.current.blur();
    },
    focus() {
      inputRef.current.focus();
    },
  }));
  return (
    <div className="Content">
      <input ref={inputRef}></input>
    </div>
  );
}

export default forwardRef(Content);
