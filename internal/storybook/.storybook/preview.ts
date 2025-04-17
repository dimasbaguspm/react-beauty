import type { Preview } from "@storybook/react";

import "@react-beauty/ui-theme-manager/dark.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
