import { render } from '@react-beauty/vitest/selector';

import { FlexContainer } from '../flex-container';

describe('FlexContainer', () => {
  it('should work as expected', () => {
    expect(
      render(
        <FlexContainer
          as="main"
          gap="1"
          direction="row"
          align="center"
          justify="center"
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </FlexContainer>,
      ).asFragment(),
    ).toMatchSnapshot();
  });
});
