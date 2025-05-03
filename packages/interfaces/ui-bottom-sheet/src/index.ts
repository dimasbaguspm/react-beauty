import {
  BottomSheetBody,
  BottomSheetContainer,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetCloseButton,
} from './atoms';

type BottomSheetCompositionModel = {
  Header: typeof BottomSheetHeader;
  Body: typeof BottomSheetBody;
  Footer: typeof BottomSheetFooter;
  Title: typeof BottomSheetTitle;
  CloseButton: typeof BottomSheetCloseButton;
};

const BottomSheetComposition = {
  Header: BottomSheetHeader,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
  Title: BottomSheetTitle,
  CloseButton: BottomSheetCloseButton,
} satisfies BottomSheetCompositionModel;

const BottomSheet = Object.assign(BottomSheetContainer, BottomSheetComposition);

// Add display names for better debugging
BottomSheet.displayName = 'BottomSheet';
BottomSheetHeader.displayName = 'BottomSheet.Header';
BottomSheetBody.displayName = 'BottomSheet.Body';
BottomSheetFooter.displayName = 'BottomSheet.Footer';
BottomSheetTitle.displayName = 'BottomSheet.Title';
BottomSheetCloseButton.displayName = 'BottomSheet.CloseButton';

export { BottomSheet };
