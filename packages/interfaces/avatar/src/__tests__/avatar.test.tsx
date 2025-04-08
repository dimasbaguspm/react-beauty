import { render } from "@react-beauty/vitest";
import { AvatarInitial } from "../avatar";

describe("Avatar", () => {
  it("should work as expected", () => {
    expect(
      render(<AvatarInitial>bar</AvatarInitial>).asFragment(),
    ).toMatchSnapshot();
  });
});
