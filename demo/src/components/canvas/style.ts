import { styled } from '@linaria/react';

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const CanvasContent = styled.div`
  border-radius: var(--border-radius-md);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  min-height: 200px;
  border: 1px solid var(--colors-main-beerus);
  margin-bottom: var(--space-4);
`;

export const CanvasControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 6px;
`;

export const ControlRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
