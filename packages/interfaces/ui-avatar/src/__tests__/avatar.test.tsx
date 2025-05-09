import { render } from '@react-beauty/vitest/selector';

import { Avatar } from '..';

describe('Avatar', () => {
  it('should work as expected', () => {
    expect(
      render(
        <Avatar size="2xl">
          <Avatar.Initial>dm</Avatar.Initial>
        </Avatar>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should work as expected', () => {
    expect(
      render(
        <Avatar size="2xl">
          <Avatar.Picture src="https://placecats.com/neo_2/300/200" />
        </Avatar>,
      ).asFragment(),
    ).toMatchSnapshot();
  });
});
