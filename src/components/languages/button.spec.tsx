import { render, screen } from '@testing-library/react'
import { ButtonRedirect } from './ButtonRedirect';
describe('ButtonRedirect.tsx', () => {
  it('should render the button component with attributes correctly', () => {
    render(<ButtonRedirect href="some-place">redirect</ButtonRedirect>)

    const children = screen.getByText(/redirect/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', 'some-place')
  });
});