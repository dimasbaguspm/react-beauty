import { render } from "@react-beauty/vitest/selector";

import { EmptyState } from "..";

describe("EmptyState", () => {
  it("should render correctly", () => {
    expect(
      render(
        <EmptyState>
          <EmptyState.Icon />
          <EmptyState.Title>Main title</EmptyState.Title>
          <EmptyState.Description>
            The body copy explains the empty state. The icon relates to the
            situation
          </EmptyState.Description>
        </EmptyState>,
      ).asFragment(),
    ).toMatchSnapshot();
  });
});
