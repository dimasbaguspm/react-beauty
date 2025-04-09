import { foo } from "#go/foo";

export const useClipboard = () => {
  return {
    copy: () => {},
    copied: foo,
  };
};
