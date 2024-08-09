import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { Navigation } from './navigation'

describe('ContactPage', () => {
  const subject = () => {
    const rendered = render(<Navigation />)

    const goBackArrow = rendered.getByRole('button', { name: 'Go back' })
    const navLinks = rendered.getAllByRole('link')

    return {
      ...rendered,
      goBackArrow,
      navLinks
    }
  }

  describe('go back', () => {
    it('renders go back arrow link', async () => {
      const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
      const routerBackFn = jest.fn()
      useRouter.mockImplementation(() => ({ back: routerBackFn }));

      const { goBackArrow } = subject()
      expect(goBackArrow.firstChild).toHaveClass('lucide-arrow-left')

      fireEvent.click(goBackArrow)
      expect(routerBackFn).toHaveBeenCalled()
    })

    it('calls the router back function when go back arrow clicked', async () => {
      const useRouter = jest.spyOn(require('next/navigation'), 'useRouter')
      const routerBackFn = jest.fn()
      useRouter.mockImplementation(() => ({ back: routerBackFn }))

      const { goBackArrow } = subject()
  
      fireEvent.click(goBackArrow)
      expect(routerBackFn).toHaveBeenCalled()
    })  
  })

  describe('navigation links', () => {
    it('renders projects navigation link', () => {
      const { navLinks } = subject()
  
      expect(navLinks[0]).toHaveTextContent('Projects')
      expect(navLinks[0]).toHaveAttribute('href', '/projects')
    })

    it('renders contact navigation link', () => {
      const { navLinks } = subject()
  
      expect(navLinks[1]).toHaveTextContent('Contact')
      expect(navLinks[1]).toHaveAttribute('href', '/contact')
    })

    it('renders home navigation link', () => {
      const { navLinks } = subject()
  
      expect(navLinks[2]).toHaveTextContent('Home')
      expect(navLinks[2]).toHaveAttribute('href', '/')
    })
  })
})