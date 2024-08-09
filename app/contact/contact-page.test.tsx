import '@testing-library/jest-dom'
import { fireEvent, render, within } from '@testing-library/react'
import ContactPage from './page'
 
describe('ContactPage', () => {
  const subject = () => {
    const rendered = render(<ContactPage />)
    const socialCards = rendered.container.querySelectorAll('#card')
    
    return {
      ...rendered,
      socialCards
    }
  }

  it('renders linkedin card and link', () => {
    const { socialCards } = subject()
    const linkedInCard = socialCards[0] as HTMLElement
    
    expect(socialCards).toHaveLength(3)
    expect(linkedInCard).toHaveTextContent('LinkedIn')
    expect(within(linkedInCard).getByRole('img').firstChild).toHaveClass('lucide-linkedin')
  })

  it('renders github card and link', () => {
    const { socialCards } = subject()
    const githubCard = socialCards[1] as HTMLElement
    
    expect(githubCard).toHaveTextContent('Github')
    expect(within(githubCard).getByRole('img').firstChild).toHaveClass('lucide-github')
  })

  it('renders email card and link', () => {
    const { socialCards } = subject()
    const emailCard = socialCards[2] as HTMLElement
    
    expect(emailCard).toHaveTextContent('Email')
    expect(within(emailCard).getByRole('img').firstChild).toHaveClass('lucide-mail')
  })
})