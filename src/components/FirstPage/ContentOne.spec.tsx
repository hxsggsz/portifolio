import { render, screen } from '@testing-library/react'
import { ContentOne } from './ContentOne';

describe('ButtonRedirect.tsx', () => {
  it('should render the button component with attributes correctly', () => {
    render(<ContentOne text='test' />)

    const background = screen.getByRole('img', {
      name: /clouds/i
    })

    const content = screen.getByRole('heading', {
      name: /test/i
    })

    expect(background).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  });
});