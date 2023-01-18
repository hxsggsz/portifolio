import { render, screen } from '@testing-library/react'
import { Header } from './Header';
import image from '../../../public/bluebird-bird.gif'

describe('ButtonRedirect.tsx', () => {
  it('should render the button component with attributes correctly', () => {
    render(<Header text='test' image={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'} altText={'passaro'} />)

    const image = screen.getByRole('img', {
      name: /passaro/i
    })

    const text = screen.getByText('test')

    expect(image).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  });
});