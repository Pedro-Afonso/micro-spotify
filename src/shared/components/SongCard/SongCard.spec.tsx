import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { IMusic } from '../../redux/models/IMusic'
import { SongCard } from './SongCard'

vi.mock('../PlayPauseButton', () => ({
  PlayPauseCard: () => {
    return <div data-testid="PlayPauseCard"></div>
  }
}))

describe('SongCard component', () => {
  const props = {
    song: {
      title: 'Teste do José',
      images: { coverart: '/' },
      subtitle: 'José'
    } as IMusic,
    navigate: vi.fn()
  }

  it('should render with PlayPauseCard component', () => {
    render(<SongCard {...props} />)

    const PlayPauseCard = screen.getByTestId('PlayPauseCard')

    expect(PlayPauseCard).toBeInTheDocument()
  })

  it('should render an image element with alt and src attributes', () => {
    render(<SongCard {...props} />)

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', props.song.images.coverart)
    expect(img).toHaveAttribute('alt', props.song.title)
  })

  it('should render the component with title element', () => {
    render(<SongCard {...props} />)

    const title = screen.getByRole('heading', { level: 3 })

    expect(title).toHaveTextContent(props.song.title)
  })

  it('should render the component with subtitle element', () => {
    render(<SongCard {...props} />)

    const subtitle = screen.getByRole('heading', { level: 4 })

    expect(subtitle).toHaveTextContent(props.song.subtitle)
  })
})
