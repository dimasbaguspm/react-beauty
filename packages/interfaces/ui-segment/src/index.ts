import { SegmentContainer, SegmentItem } from './atoms';

type SegmentCompositionModel = {
  Item: typeof SegmentItem;
};

const SegmentComposition = {
  Item: SegmentItem,
} satisfies SegmentCompositionModel;

export const Segment = Object.assign(SegmentContainer, SegmentComposition);
