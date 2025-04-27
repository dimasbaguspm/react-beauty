import { render, screen } from '@react-beauty/vitest/selector';

import { Breadcrumb } from '../breadcrumb';

describe('Breadcrumb', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders correctly with multiple items', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Library</Breadcrumb.Link>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>
          <Breadcrumb.Link href="#">Current Page</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();

    // Check dividers
    const dividers = screen.getAllByText('/');
    expect(dividers).toHaveLength(2);

    // Check active item has correct attribute
    const activeItem = screen.getByText('Current Page').closest('li');
    expect(activeItem).toHaveAttribute('data-is-active', 'true');
  });

  it('renders links with correct href attributes', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>
          <Breadcrumb.Link href="/library">Library</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    const homeLink = screen.getByText('Home').closest('a');
    const libraryLink = screen.getByText('Library').closest('a');

    expect(homeLink).toHaveAttribute('href', '/home');
    expect(libraryLink).toHaveAttribute('href', '/library');
  });

  it('renders correctly with custom divider content', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Divider>→</Breadcrumb.Divider>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Library</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(screen.getByText('→')).toBeInTheDocument();
  });
});
