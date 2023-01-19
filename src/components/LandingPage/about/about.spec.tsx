import { render, screen } from '@testing-library/react'
import { About } from './About';

const about = [
  { id: '1', text: 'test', image: 'https://vetplus.vet.br/wp-content/uploads/2019/12/meme-da-mulher-gritando-com-o-gato-na-mesa-og-1080x630.jpg' }
]

describe('About.tsx', () => {
  it('should render the About component with attributes correctly', () => {
    render(<About about={about} />)

    const title = screen.getByRole('heading', {
      name: /sobre mim!/i
    })

    const image = screen.getByRole('img', {
      name: /imagens da minha apresentação/i
    })

    const text = screen.getByRole('img', {
      name: /imagens da minha apresentação/i
    })

    expect(title).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  });
});