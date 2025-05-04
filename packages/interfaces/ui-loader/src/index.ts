import { LoaderContainer, LoaderSpinner, LoaderText } from './atoms';

type LoaderCompositionModel = {
  Spinner: typeof LoaderSpinner;
  Text: typeof LoaderText;
};

const LoaderComposition = {
  Spinner: LoaderSpinner,
  Text: LoaderText,
} satisfies LoaderCompositionModel;

export const Loader = Object.assign(LoaderContainer, LoaderComposition);
