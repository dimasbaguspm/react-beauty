import { useClipboard } from "..";
import { renderHook } from "@react-beauty/vitest/selector";

describe("use-clipboard", () => {
  it("should work as expected", () => {
    const { result } = renderHook(() => useClipboard());
    expect(result.current).toStrictEqual({
      copied: expect.any(Boolean),
      copy: expect.any(Function),
    });
  });
});
