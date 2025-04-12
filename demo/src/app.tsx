import { AvatarImage, AvatarInitial } from "@react-beauty/ui-avatar";
import { useElementWidthObserver } from "@react-beauty/use-element-width-observer";
import { useEventPromiseRejection } from "@react-beauty/use-event-promise-rejection";
import { useRef } from "react";

export default function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  /**
   * Handle unhandled promise rejection
   */
  useEventPromiseRejection(window, {
    onUnhandledRejection: (event) => {
      console.log("unhandled rejection", event);
    },
    onHandledRejection: (event) => {
      console.log("handled rejection", event);
    },
  });

  const size = useElementWidthObserver(textRef, {
    parent: divRef,
    onResize: (size) => {
      console.log("size changed", size);
    },
  });

  return (
    <>
      <AvatarInitial>
        <div>Avatar</div>
      </AvatarInitial>
      <AvatarImage src="https://cataas.com/cat/says/hello.png" />

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
