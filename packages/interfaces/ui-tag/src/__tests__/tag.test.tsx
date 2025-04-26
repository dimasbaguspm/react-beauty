import { render } from '@react-beauty/vitest/selector';

import { Tag } from '../atoms';

describe('Tag', () => {
  it('should render correctly', () => {
    expect(render(<Tag>Tag</Tag>).asFragment()).toMatchSnapshot();
  });

  it('should allow user to pass prefix and suffix icon', () => {
    expect(
      render(
        <Tag prefixIcon={<span>Prefix</span>} suffixIcon={<span>Suffix</span>}>
          Tag
        </Tag>,
      ).asFragment(),
    ).toMatchSnapshot();
  });
});
