import { Tabs } from '@react-beauty/interfaces';
import { elMb4 } from '@react-beauty/ui-core';
import { useState } from 'react';

import packageManifest from '../../../../../packages/interfaces/ui-avatar/package.json';
import { PageHeader } from '../../../components/page-header';

import { CanvasAvatar } from './canvas';
import { CodeAvatar } from './code';

export default function () {
  const [activeTab, setActiveTab] = useState('canvas');

  const isSameWith = (tab: string): boolean => activeTab === tab;

  return (
    <>
      <PageHeader
        title={packageManifest.name}
        version={packageManifest.version}
      />

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        type="underline"
        className={elMb4}
      >
        <Tabs.Item value="canvas">
          <Tabs.ItemLabel>Canvas</Tabs.ItemLabel>
        </Tabs.Item>
        <Tabs.Item value="code">
          <Tabs.ItemLabel>Snippet</Tabs.ItemLabel>
        </Tabs.Item>
      </Tabs>

      <section>
        {isSameWith('canvas') && <CanvasAvatar />}
        {isSameWith('code') && <CodeAvatar />}
      </section>
    </>
  );
}
