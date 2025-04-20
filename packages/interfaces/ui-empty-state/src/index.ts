import {
  EmptyStateContainer,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "./atoms";

type CompoundEmptyStateProps = {
  Icon: typeof EmptyStateIcon;
  Title: typeof EmptyStateTitle;
  Description: typeof EmptyStateDescription;
};

const CompooundEmptyState = {
  Icon: EmptyStateIcon,
  Title: EmptyStateTitle,
  Description: EmptyStateDescription,
} satisfies CompoundEmptyStateProps;

export const EmptyState = Object.assign(
  EmptyStateContainer,
  CompooundEmptyState,
);

export type * from "./atoms";
