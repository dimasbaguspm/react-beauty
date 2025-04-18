import { render } from "@react-beauty/vitest/selector";

import { Icon } from "../icon";

describe("Icon", () => {
  it('should able to render "arrowsRightCurved" icon', () => {
    expect(
      render(<Icon name="arrowsRightCurved" size="md" />).asFragment(),
    ).toMatchSnapshot();
  });
});
