import {
  forwardRef,
  SelectHTMLAttributes,
  ChangeEvent,
  useRef,
  FocusEventHandler,
} from 'react';

import { ElSelectWrapper, ElSelect } from './style';
import { useSelect } from './use-select';

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ placeholder, children, onFocus, onBlur, ...rest }, ref) => {
    const {
      hasError,
      isDisabled,
      hasLeadElement,
      isFocused,
      value,
      selectId,
      selectWrapperId,
      onValueChange: contextOnChange,
      setIsFocused,
    } = useSelect();

    const selectRef = useRef<HTMLSelectElement>(null);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;
      contextOnChange?.(newValue);
    };

    const handleFocus: FocusEventHandler<HTMLSelectElement> = (e) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur: FocusEventHandler<HTMLSelectElement> = (e) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <ElSelectWrapper
        id={selectWrapperId}
        data-error={hasError}
        data-disabled={isDisabled}
        data-is-focused={isFocused}
        data-is-blurred={!isFocused}
      >
        <ElSelect
          ref={ref || selectRef}
          id={selectId}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isDisabled}
          data-has-lead-element={hasLeadElement}
          value={value || undefined}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled={value !== ''}>
              {placeholder}
            </option>
          )}
          {children}
        </ElSelect>
      </ElSelectWrapper>
    );
  },
);
