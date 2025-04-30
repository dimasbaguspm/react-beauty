import {
  SwitchContainer,
  SwitchLabel,
  SwitchToggle,
  SwitchHelperText,
} from './atoms';

type CompoundSwitchProps = {
  Label: typeof SwitchLabel;
  Toggle: typeof SwitchToggle;
  HelperText: typeof SwitchHelperText;
};

const CompoundSwitch = {
  Label: SwitchLabel,
  Toggle: SwitchToggle,
  HelperText: SwitchHelperText,
} satisfies CompoundSwitchProps;

export const Switch = Object.assign(SwitchContainer, CompoundSwitch);
