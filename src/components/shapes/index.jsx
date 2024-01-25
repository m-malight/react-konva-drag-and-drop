import React, { useState, useRef, useEffect } from "react";
import Shape from "./shapes";

export default function Index() {
  const [shape, setShape] = useState("Square");
  const [show, setShow] = useState(false);
  const [isdragging, setIsDragging] = useState(false);
  const shape_size = useRef(null);

  useEffect(() => {
    setShow(true);
  }, []);

  function handleDrag(dragging) {
    if (dragging) {
      setIsDragging(true);
    } else {
      setIsDragging(false);
    }
  }
  return (
    <div className="h-screen p-2">
      {show ? (
        <>
          <select
            className={`${
              isdragging ? "animate-border-blink" : "border-rose-500"
            } border-4 p-2 w-1/4 outline-none rounded-md`}
            onChange={(e) => {
              setShape(e.target.value);
            }}
          >
            <option value="Square">Square</option>
            <option value="Circle">Circle</option>
            <option value="Star">Star</option>
            <option value="GSquare">Square in Group</option>
            <option value="GCircle">Circle in Group</option>
            <option value="GStar">Star in Group</option>
          </select>
          <div
            ref={shape_size}
            className={`${
              isdragging ? "animate-border-blink" : "border-rose-500"
            } border-4 mt-[1.5vh] rounded-md h-[88.5vh]`}
          >
            <Shape
              shape={shape}
              width={shape_size.current.clientWidth}
              height={shape_size.current.clientHeight}
              onDrag={handleDrag}
            />
          </div>
        </>
      ) : (
        <div ref={shape_size} className="h-[88.5vh]"></div>
      )}
    </div>
  );
}
