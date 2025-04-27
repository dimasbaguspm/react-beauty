import { forwardRef, HTMLAttributes, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ElTextInputTrailElement } from './style';
import { useTextInput } from './use-text-input';

import type { ReactNode } from 'react';

export interface TextInputTrailElementProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TextInputTrailElement = forwardRef<
  HTMLDivElement,
  TextInputTrailElementProps
>((props, ref) => {
  const { registerTrailElement, inputWrapperId } = useTextInput();

  useEffect(() => {
    registerTrailElement();
  }, []);

  const wrapper = document.getElementById(inputWrapperId);

  if (!wrapper) return null;

  return (
    <>
      {createPortal(<ElTextInputTrailElement ref={ref} {...props} />, wrapper)}
    </>
  );
});
