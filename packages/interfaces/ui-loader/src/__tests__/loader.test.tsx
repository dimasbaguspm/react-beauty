import { render } from '@react-beauty/vitest/selector';

import { Loader } from '../index';

describe('Loader', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(
      <Loader>
        <Loader.Spinner />
      </Loader>,
    );

    expect(getByRole('alert')).toBeInTheDocument();
  });

  it('renders with text', () => {
    const { getByText } = render(
      <Loader>
        <Loader.Spinner />
        <Loader.Text>Loading...</Loader.Text>
      </Loader>,
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with linear type', () => {
    const { container } = render(
      <Loader type="linear">
        <Loader.Spinner />
      </Loader>,
    );

    expect(container.querySelector('[data-type="linear"]')).toBeInTheDocument();
  });
});
