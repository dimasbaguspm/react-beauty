import { Icon } from '@react-beauty/ui-icon';
import { fireEvent, render } from '@react-beauty/vitest/selector';
import { act } from 'react';

import { Alert } from '..';

describe('Alert', () => {
  it('should able to render single line', () => {
    expect(
      render(
        <Alert>
          <Alert.Icon>
            <Icon name="genericInfo" />
          </Alert.Icon>
          Data uploaded to the server. Fire on!
          <Alert.DismissButton onClick={vi.fn()} />
        </Alert>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should able to render multi line', () => {
    expect(
      render(
        <Alert>
          <Alert.Icon>
            <Icon name="genericInfo" />
          </Alert.Icon>
          <Alert.Title>Alert Title</Alert.Title>
          <Alert.Description>
            Pull request #999 merged successfully. Ready for review View the
            pull request on GitHub View the pull request on GitHub
          </Alert.Description>
          <Alert.DismissButton onClick={vi.fn()} />
        </Alert>,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should able to click DismissButton', () => {
    const onClick = vi.fn();
    const { getByRole } = render(
      <Alert>
        <Alert.Icon>
          <Icon name="genericInfo" />
        </Alert.Icon>
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>
          Pull request #999 merged successfully. Ready for review View the pull
          request on GitHub View the pull request on GitHub
        </Alert.Description>
        <Alert.DismissButton onClick={onClick} />
      </Alert>,
    );

    act(() => {
      fireEvent.click(
        getByRole('button', {
          name: 'Dismiss alert',
        }),
      );
    });

    expect(onClick).toHaveBeenCalled();
  });
});
