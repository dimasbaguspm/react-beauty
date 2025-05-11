import { createRoot } from 'react-dom/client';

const bootstrap = async () => {
  const root = document.getElementById('root');

  if (!root) throw new Error('Root element not found');

  const { Shell } = await import('./core/shell');

  createRoot(root).render(<Shell />);
};

bootstrap().catch((error) => {
  console.error('Error during bootstrap:', error);
});
