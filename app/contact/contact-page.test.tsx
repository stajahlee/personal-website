import '@testing-library/jest-dom'
import { render, within } from '@testing-library/react'
import ContactPage from './page'
 
describe('ContactPage', () => {
  const subject = () => {
    return render(<ContactPage />)
  }

  it('renders go back arrow link', () => {
    const { getByRole } = subject()
 
    const goBackArrow = getByRole('button', { name: 'Go back' })
    expect(goBackArrow.firstChild).toHaveClass('lucide-arrow-left')
  })

  it.only('renders navigation links', () => {
    const { debug } = subject()
 
    debug()
  })
})