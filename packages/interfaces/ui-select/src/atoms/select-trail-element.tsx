import { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ElSelectTrailElement } from './style';
import { useSelect } from './use-select';

export interface SelectTrailElementProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const SelectTrailElement = forwardRef<
  HTMLDivElement,
  SelectTrailElementProps
>(({ children, ...rest }, ref) => {
  const { registerTrailElement, selectWrapperId } = useSelect();

  useEffect(() => {
    registerTrailElement();
  }, [registerTrailElement]);

  const el = document.getElementById(selectWrapperId);
  if (!el) return null;

  return (
    <>
      {createPortal(
        <ElSelectTrailElement ref={ref} {...rest}>
          {children}
        </ElSelectTrailElement>,
        el,
      )}
    </>
  );
});
