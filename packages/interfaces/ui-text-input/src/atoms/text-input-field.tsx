import { forwardRef } from 'react';

import { ElTextInput, ElTextInputWrapper } from './style';
import { useTextInput } from './use-text-input';

import type { FocusEventHandler, InputHTMLAttributes } from 'react';

type TextInputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'hasError' | 'disabled'
>;

export const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
  (props, ref) => {
    const {
      hasLeadElement,
      hasTrailElement,
      isDisabled,
      getAttributes,
      setIsFocused,
      inputWrapperId,
    } = useTextInput();

    const handleOnFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocused(true);
      props?.onFocus?.(e);
    };

    const handleOnBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocused(false);
      props?.onBlur?.(e);
    };

    return (
      <ElTextInputWrapper {...getAttributes()} id={inputWrapperId}>
        <ElTextInput
          ref={ref}
          {...props}
          data-has-lead-element={hasLeadElement}
          data-has-trail-element={hasTrailElement}
          disabled={Boolean(isDisabled)}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </ElTextInputWrapper>
    );
  },
);
