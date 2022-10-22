import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { IMusic } from '../../redux/models/IMusic'
import { SongBar } from './SongBar'

vi.mock('../PlayPauseButton', () => ({
  PlayPauseCard: () => {
    return <div data-testid="PlayPauseCard"></div>
  }
}))

describe('SongBar component', () => {
  const props = {
    song: {
      images: { coverart: '/' },
      subtitle: 'José',
      title: 'Super'
    } as IMusic,
    position: 1,
    navigate: vi.fn()
  }

  it('should render an image element with alt and src attributes', () => {
    render(<SongBar {...props} />)

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', props.song.images.coverart)
    expect(img).toHaveAttribute('alt', props.song.title)
  })

  it('should render the component with title element', () => {
    render(<SongBar {...props} />)

    const title = screen.getByRole('heading', { level: 3 })

    expect(title).toHaveTextContent(props.song.title)
  })

  it('should render the component with subtitle element', () => {
    render(<SongBar {...props} />)

    const subtitle = screen.getByText(props.song.subtitle)

    expect(subtitle).toBeInTheDocument()
  })

  it('should render with PlayPauseCard component', () => {
    render(<SongBar {...props} />)

    const PlayPauseCard = screen.getByTestId('PlayPauseCard')

    expect(PlayPauseCard).toBeInTheDocument()
  })
})
