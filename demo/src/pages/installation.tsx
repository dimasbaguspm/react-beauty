import { FC } from 'react';

const InstallationPage: FC = () => {
  return (
    <div>
      <h1>Installation</h1>
      <p>This is the installation page.</p>
      <h2>Install via npm</h2>
      <pre>
        <code>npm install @react-beauty/ui-core</code>
      </pre>
      <h2>Install via yarn</h2>
      <pre>
        <code>yarn add @react-beauty/ui-core</code>
      </pre>
    </div>
  );
};
export default InstallationPage;
