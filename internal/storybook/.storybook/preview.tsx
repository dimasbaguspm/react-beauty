import '@react-beauty/ui/style.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--colors-main-gohan)',
        },
      ],
    },
  },
};

export default preview;
