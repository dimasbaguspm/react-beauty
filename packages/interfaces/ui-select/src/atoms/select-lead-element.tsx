import { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ElSelectLeadElement } from './style';
import { useSelect } from './use-select';

export interface SelectLeadElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SelectLeadElement = forwardRef<
  HTMLDivElement,
  SelectLeadElementProps
>(({ children, ...rest }, ref) => {
  const { registerLeadElement, selectWrapperId } = useSelect();

  useEffect(() => {
    registerLeadElement();
  }, [registerLeadElement]);

  const el = document.getElementById(selectWrapperId);
  if (!el) return null;

  return (
    <>
      {createPortal(
        <ElSelectLeadElement ref={ref} {...rest}>
          {children}
        </ElSelectLeadElement>,
        el,
      )}
    </>
  );
});
