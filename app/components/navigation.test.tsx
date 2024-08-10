import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Navigation } from './navigation';

describe('ContactPage', () => {
  const subject = () => {
    const rendered = render(<Navigation />);

    const goBackArrow = rendered.getByRole('button', { name: 'Go back' });
    const navLinks = rendered.getAllByRole('link');

    return {
      ...rendered,
      goBackArrow,
      navLinks,
    };
  };

  describe('go back', () => {
    it('renders go back arrow link', async () => {
      const useRouter = jest.spyOn(require('next/navigation'), 'useRouter');
      const routerBackFn = jest.fn();
      useRouter.mockImplementation(() => ({ back: routerBackFn }));

      const { goBackArrow } = subject();
      expect(goBackArrow.firstChild).toHaveClass('lucide-arrow-left');

      fireEvent.click(goBackArrow);
      expect(routerBackFn).toHaveBeenCalled();
    });

    it('calls the router back function when go back arrow clicked', async () => {
      const useRouter = jest.spyOn(require('next/navigation'), 'useRouter');
      const routerBackFn = jest.fn();
      useRouter.mockImplementation(() => ({ back: routerBackFn }));

      const { goBackArrow } = subject();

      fireEvent.click(goBackArrow);
      expect(routerBackFn).toHaveBeenCalled();
    });
  });

  describe('navigation links', () => {
    it('renders 5 navigation link', () => {
      const { navLinks } = subject();

      expect(navLinks).toHaveLength(5);
    });

    it.each([
      { label: 'About', href: '/about', linkLocation: 0 },
      { label: 'Work', href: '/work', linkLocation: 1 },
      { label: 'Blog', href: '/blog', linkLocation: 2 },
      { label: 'Contact', href: '/contact', linkLocation: 3 },
      { label: 'Home', href: '/', linkLocation: 4 },
    ])('renders %s navigation link', ({ label, href, linkLocation }) => {
      const { navLinks } = subject();

      expect(navLinks[linkLocation]).toHaveTextContent(label);
      expect(navLinks[linkLocation]).toHaveAttribute('href', href);
    });
  });
});
