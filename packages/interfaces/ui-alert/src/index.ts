import {
  AlertContainer,
  AlertDescription,
  AlertDismissButton,
  AlertIcon,
  AlertTitle,
} from './atoms';

type CompoundAlertProps = {
  Icon: typeof AlertIcon;
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
  DismissButton: typeof AlertDismissButton;
};

const CompoundAlert = {
  Icon: AlertIcon,
  Title: AlertTitle,
  Description: AlertDescription,
  DismissButton: AlertDismissButton,
} satisfies CompoundAlertProps;

export const Alert = Object.assign(AlertContainer, CompoundAlert);
export type * from './type';
