import { render, screen } from '@testing-library/react'
import { ContentTwo } from './ContentTwo';

describe('ButtonRedirect.tsx', () => {
  it('should render the button component with attributes correctly', () => {
    render(<ContentTwo text='test' />)

    const content = screen.getByRole('heading', {
      name: /test/i
    })

    expect(content).toBeInTheDocument()
  });
});