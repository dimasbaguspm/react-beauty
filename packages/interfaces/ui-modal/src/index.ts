import {
  ModalBody,
  ModalContainer,
  ModalDismissButton,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from './atoms';

type ModalCompositionModel = {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  DismissButton: typeof ModalDismissButton;
  Footer: typeof ModalFooter;
  Title: typeof ModalTitle;
};

const ModalComposition = {
  Header: ModalHeader,
  Body: ModalBody,
  DismissButton: ModalDismissButton,
  Footer: ModalFooter,
  Title: ModalTitle,
} satisfies ModalCompositionModel;

export const Modal = Object.assign(ModalContainer, ModalComposition);
