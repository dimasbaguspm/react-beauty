import { Select, Switch, Text, TextInput } from '@react-beauty/interfaces';
import {
  FC,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
} from 'react';

import {
  CanvasContainer,
  CanvasContent,
  CanvasControls,
  ControlRow,
} from './style';

export interface CanvasOptions {
  title: string;
  description: string;
  type: 'text' | 'select' | 'boolean' | 'number';
  defaultValue?: string | number | boolean;
  options?: string[] | { label: string; value: string | number }[];
  min?: number;
  max?: number;
  step?: number;
}

export interface CanvasProps<Type> {
  options?: CanvasOptions[];
  children: FC<Type> | ReactNode;
}

type ControlValue = string | number | boolean;

export const Canvas = <Type extends object>(props: CanvasProps<Type>) => {
  const { options = [], children } = props;

  const [controlValues, setControlValues] = useState<
    Record<string, ControlValue>
  >({});

  useEffect(() => {
    const initialValues: Record<string, ControlValue> = {};
    options.forEach((option) => {
      initialValues[option.title] =
        option.defaultValue !== undefined
          ? option.defaultValue
          : getDefaultValueByType(option.type);
    });
    setControlValues(initialValues);
  }, [options]);

  const getDefaultValueByType = (type: string): ControlValue => {
    switch (type) {
      case 'number':
        return 0;
      case 'boolean':
        return false;
      case 'select':
      case 'text':
      default:
        return '';
    }
  };

  // Handle control changes
  const handleControlChange = useCallback(
    (name: string, value: ControlValue) => {
      setControlValues((prev: Record<string, ControlValue>) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  // Render control based on type
  const renderControl = (option: CanvasOptions) => {
    const {
      title,
      description: optionDesc,
      type,
      options: selectOptions,
    } = option;
    const value = controlValues[title];

    switch (type) {
      case 'text':
        return (
          <ControlRow key={title}>
            <TextInput>
              <TextInput.Label htmlFor={title}>{title}</TextInput.Label>
              <TextInput.Field
                type="text"
                id={title}
                value={(value as string) || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleControlChange(title, e.target.value)
                }
              />
              {optionDesc && (
                <TextInput.HelperText>{optionDesc}</TextInput.HelperText>
              )}
            </TextInput>
          </ControlRow>
        );
      case 'number':
        return (
          <ControlRow key={title}>
            <TextInput>
              <TextInput.Label htmlFor={title}>{title}</TextInput.Label>
              <TextInput.Field
                id={title}
                type="number"
                min={option.min}
                max={option.max}
                step={option.step || 1}
                value={value as number}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleControlChange(title, e.target.value)
                }
              />
              {optionDesc && (
                <TextInput.HelperText>{optionDesc}</TextInput.HelperText>
              )}
            </TextInput>
          </ControlRow>
        );
      case 'boolean':
        return (
          <ControlRow key={title}>
            <Switch
              isChecked={value as boolean}
              onChange={(value) => handleControlChange(title, value)}
            >
              <Switch.Toggle />
              <Switch.Label>{title}</Switch.Label>
              {optionDesc && (
                <Switch.HelperText>{optionDesc}</Switch.HelperText>
              )}
            </Switch>
          </ControlRow>
        );
      case 'select':
        return (
          <ControlRow key={title}>
            <Select
              value={value as string}
              onValueChange={(value) => handleControlChange(title, value)}
            >
              <Select.Label htmlFor={title}>{title}</Select.Label>
              <Select.Field>
                {Array.isArray(selectOptions) &&
                  selectOptions.map((option, idx) => {
                    if (typeof option === 'string') {
                      return (
                        <Select.Option key={idx} value={option}>
                          {option}
                        </Select.Option>
                      );
                    } else {
                      return (
                        <Select.Option key={idx} value={option.value as string}>
                          {option.label}
                        </Select.Option>
                      );
                    }
                  })}
              </Select.Field>
              {optionDesc && (
                <Select.HelperText>{optionDesc}</Select.HelperText>
              )}
            </Select>
          </ControlRow>
        );
      default:
        return null;
    }
  };

  // Create props for child component
  const childProps = { ...controlValues } as Type;

  // Render child component
  const child =
    typeof children === 'function' ? children(childProps) : children;

  return (
    <CanvasContainer className="canvas-container">
      <CanvasContent className="canvas-content">{child}</CanvasContent>
      {options.length > 0 && (
        <>
          <Text as="h3">API</Text>
          <CanvasControls className="canvas-controls">
            {options.map(renderControl)}
          </CanvasControls>
        </>
      )}
    </CanvasContainer>
  );
};
