import { forwardRef, TextareaHTMLAttributes, FocusEvent } from 'react';

import { ElTextArea, ElTextAreaWrapper } from './style';
import { useTextArea } from './use-text-area';

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
}

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(({ disabled, onFocus, onBlur, rows = 4, ...rest }, ref) => {
  const { isDisabled, getAttributes, setIsFocused, textAreaWrapperId } =
    useTextArea();

  const isTextAreaDisabled = disabled || isDisabled;

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <ElTextAreaWrapper {...getAttributes()}>
      <ElTextArea
        id={textAreaWrapperId}
        disabled={isTextAreaDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        ref={ref}
        {...rest}
      />
    </ElTextAreaWrapper>
  );
});
