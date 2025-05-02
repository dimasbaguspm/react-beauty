import { forwardRef, SelectHTMLAttributes, ChangeEvent, useRef } from 'react';

import { ElSelectWrapper, ElSelect } from './style';
import { useSelect } from './use-select';

export interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ placeholder, children, ...rest }, ref) => {
    const {
      hasError,
      isDisabled,
      hasLeadElement,
      value,
      selectId,
      selectWrapperId,
      onValueChange: contextOnChange,
    } = useSelect();

    const selectRef = useRef<HTMLSelectElement>(null);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;
      contextOnChange?.(newValue);
    };

    return (
      <ElSelectWrapper id={selectWrapperId}>
        <ElSelect
          ref={ref || selectRef}
          id={selectId}
          onChange={handleChange}
          disabled={isDisabled}
          data-error={hasError}
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
