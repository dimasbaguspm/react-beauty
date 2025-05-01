import { forwardRef, InputHTMLAttributes, FocusEvent } from 'react';

import { ElRadioWrapper, ElRadioInput, ElRadioCircle } from './style';
import { useRadio } from './use-radio';

type RadioInputFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'type' | 'onChange'
>;

export const RadioInputField = forwardRef<
  HTMLInputElement,
  RadioInputFieldProps
>(({ id, onFocus, onBlur, ...rest }, ref) => {
  const {
    isDisabled,
    isChecked,
    radioId,
    name,
    value,
    onChange,
    getAttributes,
    setIsFocused,
  } = useRadio();

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = () => {
    // Always call onChange with the radio value
    onChange(value);
  };

  return (
    <ElRadioWrapper {...getAttributes()}>
      <ElRadioInput
        ref={ref}
        id={id || radioId}
        name={name}
        value={value}
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...rest}
      />
      <ElRadioCircle data-disabled={isDisabled} />
    </ElRadioWrapper>
  );
});
