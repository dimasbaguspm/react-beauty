import React from 'react';
import Markdown from 'react-markdown';

// @ts-expect-error -- further investigation needed
import content from './content.md?raw';

const IntroductionPage = () => {
  return <Markdown>{content}</Markdown>;
};
export default IntroductionPage;
