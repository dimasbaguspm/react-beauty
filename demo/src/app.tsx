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
  EmptyState,
  Icon,
  MenuItem,
  ReactBeautyUIProvider,
  Tag,
} from "@react-beauty/interfaces";
import { useRef } from "react";

export default function App() {
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
    onResize: (size) => {
      console.log("size changed", size);
    },
  });

  return (
    <ReactBeautyUIProvider defaultTheme="light">
      <FlexContainer gap="6">
        <Button onClick={() => {}} variant="fill">
          Fill Button Text
        </Button>
        <Button onClick={() => {}} variant="outline">
          Outline Button Text
        </Button>
        <Button onClick={() => {}} variant="ghost">
          Ghost Button Text
        </Button>
      </FlexContainer>
      <EmptyState>
        <EmptyState.Icon />
        <EmptyState.Title>Main title</EmptyState.Title>
        <EmptyState.Description>
          The body copy explains the empty state. The icon relates to the
          situation
        </EmptyState.Description>
      </EmptyState>

      <FlexContainer gap="6" direction="column">
        <MenuItem href="https://www.react-beauty.com">
          <MenuItem.LeadElement>
            <Icon name="otherFrame" size="md" />
          </MenuItem.LeadElement>
          <MenuItem.Label data-description="Assume it's a long description">
            MenuItem Anchor
          </MenuItem.Label>
          <MenuItem.TrailElement>
            <Tag>99</Tag>
          </MenuItem.TrailElement>
        </MenuItem>
        <MenuItem onClick={() => {}}>MenuItem Button + Single Line</MenuItem>
      </FlexContainer>

      <FlexContainer
        as="main"
        direction="column"
        gap="2"
        style={{ marginTop: "1rem" }}
      >
        <Tag>Tag</Tag>
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

        <div>
          <h1 ref={textRef}>Hello, world! - {size}</h1>
        </div>
      </FlexContainer>
    </ReactBeautyUIProvider>
  );
}
