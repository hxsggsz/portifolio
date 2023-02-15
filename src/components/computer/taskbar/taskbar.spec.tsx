import { Taskbar } from "./taskbar";
import { render, screen } from '@testing-library/react'

const taskBar = [
  { id: '1', image: 'https://vetplus.vet.br/wp-content/uploads/2019/12/meme-da-mulher-gritando-com-o-gato-na-mesa-og-1080x630.jpg' }
]

describe('<TaskBar/>', () => {
  it('should render the taskbar', () => {
    render(<Taskbar taskBar={taskBar} />)
    const image = screen.getByRole('img', {
      name: /icon/i
    })

    expect(image).toBeInTheDocument()
  });
});