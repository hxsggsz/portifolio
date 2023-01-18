import { render, screen } from '@testing-library/react'
import { ButtonRedirect } from './ButtonRedirect';

describe('ButtonRedirect.tsx', () => {
  it('should render the button component with attributes correctly', () => {
    render(<ButtonRedirect href="redirect">redirect</ButtonRedirect>)

    const children = screen.getByRole('button', {
      name: /redirect/i
    })

    expect(children).toBeInTheDocument()
    expect(children).totoHaveAttribute('href', 'redirect')
  });
});