import { forwardRef, InputHTMLAttributes, FocusEvent } from 'react';

import { ElCheckboxWrapper, ElCheckboxInput, ElCheckboxBox } from './style';
import { useCheckbox } from './use-checkbox';

type CheckboxInputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'type' | 'onChange'
>;

export const CheckboxInputField = forwardRef<
  HTMLInputElement,
  CheckboxInputFieldProps
>(({ id, onFocus, onBlur, ...rest }, ref) => {
  const {
    isDisabled,
    isChecked,
    checkboxId,
    name,
    value,
    onChange,
    getAttributes,
    setIsFocused,
  } = useCheckbox();

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = () => {
    // Call onChange with the checkbox value and the new checked state
    onChange(value, !isChecked);
  };

  return (
    <ElCheckboxWrapper {...getAttributes()}>
      <ElCheckboxInput
        ref={ref}
        id={id || checkboxId}
        name={name}
        value={value}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...rest}
      />
      <ElCheckboxBox data-disabled={isDisabled} />
    </ElCheckboxWrapper>
  );
});
