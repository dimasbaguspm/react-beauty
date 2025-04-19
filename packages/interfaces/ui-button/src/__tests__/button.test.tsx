import { act, fireEvent, render, screen } from "@react-beauty/vitest/selector";

import { Button } from "../atoms";

describe("Button", () => {
  it("should render correctly", () => {
    expect(
      render(<Button onClick={vi.fn()}>Button</Button>).asFragment(),
    ).toMatchSnapshot();
  });

  it("should follow the standard aria button", () => {
    const mockClickFn = vi.fn();

    render(<Button onClick={mockClickFn}>Button</Button>);

    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(mockClickFn).toHaveBeenCalledTimes(1);
  });
});
