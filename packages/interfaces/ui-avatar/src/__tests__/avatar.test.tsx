import { render } from "@react-beauty/vitest/selector";

import { AvatarInitial, AvatarPicture } from "../atoms";

describe("Avatar", () => {
  it("should work as expected", () => {
    expect(
      render(<AvatarInitial>bar</AvatarInitial>).asFragment(),
    ).toMatchSnapshot();
  });

  it("should work as expected", () => {
    expect(
      render(<AvatarPicture size="2xl" src="foo" />).asFragment(),
    ).toMatchSnapshot();
  });
});
