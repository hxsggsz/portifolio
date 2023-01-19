import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar';

const options = [
  { content: 'test', url: '/home' }
]

describe('About.tsx', () => {
  it('should render the Navbar component with attributes correctly', () => {
    render(<Navbar options={options} />)

    const nav = screen.getByText(/test/i)

    expect(nav).toBeInTheDocument()
  });
});