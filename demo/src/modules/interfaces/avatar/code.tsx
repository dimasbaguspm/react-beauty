import { Text } from '@react-beauty/interfaces';
import { FC } from 'react';

import { Code } from '../../../components/code';

export const CodeAvatar: FC = () => (
  <>
    <Text as="h4">Avatar Initial</Text>
    <Code
      showCopyButton
      showLineNumbers
      language="tsx"
      code={`
        <Avatar size="md">
          <Avatar.Initial>AB</Avatar.Initial>
        </Avatar>
        `}
    />
    <Text as="h4">Avatar Image</Text>
    <Code
      showCopyButton
      showLineNumbers
      language="tsx"
      code={`
        <Avatar size="md">
          <Avatar.Image src="example.image" alt="Avatar Image" />
        </Avatar>
        `}
    />
  </>
);
