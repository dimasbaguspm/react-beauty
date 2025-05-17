import { Tag, Text } from '@react-beauty/interfaces';
import { FC } from 'react';

import { PageHeaderContainer } from './style';

export interface PageHeaderProps {
  title: string;
  version: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, version }) => {
  return (
    <PageHeaderContainer>
      <Text as="h2">{title}</Text>
      <Tag size="sm">{version}</Tag>
    </PageHeaderContainer>
  );
};
