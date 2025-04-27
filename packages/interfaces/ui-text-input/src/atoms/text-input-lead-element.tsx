import { forwardRef, HTMLAttributes, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ElTextInputLeadElement } from './style';
import { useTextInput } from './use-text-input';

import type { ReactNode } from 'react';

export interface TextInputLeadElementProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TextInputLeadElement = forwardRef<
  HTMLDivElement,
  TextInputLeadElementProps
>((props, ref) => {
  const { registerLeadElement, inputWrapperId } = useTextInput();

  useEffect(() => {
    registerLeadElement();
  }, []);

  const wrapper = document.getElementById(inputWrapperId);

  if (!wrapper) return null;

  return (
    <>
      {createPortal(<ElTextInputLeadElement ref={ref} {...props} />, wrapper)}
    </>
  );
});
