import { useElementWidthObserver } from "@react-beauty/use-element-width-observer";
import { useRef } from "react";

export default function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  const size = useElementWidthObserver(textRef, {
    parent: divRef,
    onResize: (size) => {
      console.log("size changed", size);
    },
  });

  return (
    <>
      <div
        onClick={(e) => {
          e.currentTarget.dispatchEvent(new Event("resize"));
          console.log("clicked");
        }}
        ref={divRef}
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "red",
          overflow: "auto",
          resize: "both",
        }}
      />

      <div>
        <h1 ref={textRef}>Hello, world! - {size}</h1>
      </div>
    </>
  );
}
