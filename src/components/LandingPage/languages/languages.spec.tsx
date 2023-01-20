import { render, screen } from '@testing-library/react'
import { Languages } from './languages';

const langs = [
  { id: '1', name: 'test', images: 'https://vetplus.vet.br/wp-content/uploads/2019/12/meme-da-mulher-gritando-com-o-gato-na-mesa-og-1080x630.jpg' }
]

describe('About.tsx', () => {
  it('should render the About component with attributes correctly', () => {
    render(<Languages languages={langs} />)

    const icon = screen.getByRole('img', {
      name: /icone do test/i
    })

    const name = screen.getByRole('heading', {
      name: /test/i
    })

    expect(icon).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  });
});