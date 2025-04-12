import { act, renderHook } from "@react-beauty/vitest/selector";

import { useEventPromiseRejection } from "..";

describe("useEventPromiseRejection", () => {
  const spiedConsoleWarn = vi.spyOn(console, "warn");

  afterEach(() => {
    spiedConsoleWarn.mockReset();
  });

  it("should handle on unhandled promise rejection", () => {
    const mockOnUnhandledRejection = vi.fn();

    renderHook(() =>
      useEventPromiseRejection(undefined, {
        onUnhandledRejection: mockOnUnhandledRejection,
      }),
    );

    expect(mockOnUnhandledRejection).not.toHaveBeenCalled();

    act(() => {
      window.dispatchEvent(
        new CustomEvent("unhandledrejection", {
          detail: {
            reason: "reason",
          },
        }),
      );
    });

    expect(mockOnUnhandledRejection).toHaveBeenCalledTimes(1);
    expect(spiedConsoleWarn).toHaveBeenCalledWith("Unhandled Promise Rejected");
  });

  it("should handle on handled promise rejection", () => {
    const mockOnHandledRejection = vi.fn();

    renderHook(() =>
      useEventPromiseRejection(undefined, {
        onHandledRejection: mockOnHandledRejection,
      }),
    );

    expect(mockOnHandledRejection).not.toHaveBeenCalled();

    act(() => {
      window.dispatchEvent(
        new CustomEvent("rejectionhandled", {
          detail: {
            reason: "reason",
          },
        }),
      );
    });

    expect(mockOnHandledRejection).toHaveBeenCalledTimes(1);
    expect(spiedConsoleWarn).toHaveBeenCalledWith("Handled Promise Rejected");
  });
});
