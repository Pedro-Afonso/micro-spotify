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
  const song = {
    title: 'Teste do José',
    images: { coverart: '/' },
    subtitle: 'José'
  } as IMusic

  it('should render with PlayPauseCard component', () => {
    render(<SongCard song={song} />)

    const PlayPauseCard = screen.getByTestId('PlayPauseCard')

    expect(PlayPauseCard).toBeInTheDocument()
  })

  it('should render an image element with alt and src attributes', () => {
    render(<SongCard song={song} />)

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', song.images.coverart)
    expect(img).toHaveAttribute('alt', song.title)
  })

  it('should render the component with title element', () => {
    render(<SongCard song={song} />)

    const title = screen.getByRole('heading', { level: 3 })

    expect(title).toHaveTextContent(song.title)
  })

  it('should render the component with subtitle element', () => {
    render(<SongCard song={song} />)

    const subtitle = screen.getByRole('heading', { level: 4 })

    expect(subtitle).toHaveTextContent(song.subtitle)
  })
})
