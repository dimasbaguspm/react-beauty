import { ReactBeautyUIProvider } from "@react-beauty/ui-core";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-theme",
      defaultTheme: "light",
      parentSelector: "html",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
    (Story) => (
      <ReactBeautyUIProvider defaultTheme="light">
        <Story />
      </ReactBeautyUIProvider>
    ),
  ],
};

export default preview;
