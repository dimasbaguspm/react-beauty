import { render, screen } from '@react-beauty/vitest/selector';

import { MenuItem } from '..';

describe('MenuItem', () => {
  it('should able to render a Button', () => {
    render(
      <MenuItem onClick={vi.fn()}>
        <MenuItem.Label>MenuItem</MenuItem.Label>
      </MenuItem>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should able to render a Anchor', () => {
    render(
      <MenuItem href="https://www.react-beauty.com">
        <MenuItem.Label>MenuItem</MenuItem.Label>
      </MenuItem>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should able to render with complete form', () => {
    render(
      <MenuItem href="https://www.react-beauty.com">
        <MenuItem.LeadElement>
          <span>Lead</span>
        </MenuItem.LeadElement>
        <MenuItem.Label data-description="foo">MenuItem</MenuItem.Label>
        <MenuItem.TrailElement>
          <span>Trail</span>
        </MenuItem.TrailElement>
      </MenuItem>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Lead')).toBeInTheDocument();
    expect(screen.getByText('MenuItem')).toBeInTheDocument();
    expect(screen.getByText('Trail')).toBeInTheDocument();
  });
});
