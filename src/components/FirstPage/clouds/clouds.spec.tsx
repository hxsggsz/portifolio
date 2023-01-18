import { render, screen } from '@testing-library/react'
import { Clouds } from './Clouds'

describe('<Clouds/>', () => {
  it('should render the component with all propieties', () => {
    render(<Clouds text='test' />)

    const cloud = screen.getByRole('img', { name: /clouds/i })
    const content = screen.getByRole('heading', {
      name: /test/i
    })

    expect(cloud).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  });
});