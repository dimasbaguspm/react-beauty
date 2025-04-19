import { FlexContainer } from "@react-beauty/components";
import {
  useElementWidthObserver,
  useEventPromiseRejection,
} from "@react-beauty/hooks";
import {
  Alert,
  AvatarInitial,
  AvatarPicture,
  Button,
  Icon,
  ReactBeautyUIProvider,
} from "@react-beauty/interfaces";
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
    <ReactBeautyUIProvider defaultTheme="light">
      <Button onClick={() => window.alert("clicked")} variant="fill">
        Button Text
      </Button>
      <FlexContainer as="main" direction="column" gap="2">
        <AvatarInitial>
          <div>Avatar</div>
        </AvatarInitial>
        <AvatarPicture src="https://placecats.com/millie/300/150" />
        <Icon name="arrowsChevronDown" />
        <Alert intent="success" type="colourful">
          <Alert.Icon>
            <Icon name="genericInfo" />
          </Alert.Icon>
          <Alert.Title>Alert Title</Alert.Title>
          <Alert.DismissButton onClick={() => window.alert("dismiss")} />
          <Alert.Description>
            Pull request #999 merged successfully. Ready for review View the
            pull request on GitHub View the pull request on GitHub
          </Alert.Description>
        </Alert>

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
      </FlexContainer>
    </ReactBeautyUIProvider>
  );
}
