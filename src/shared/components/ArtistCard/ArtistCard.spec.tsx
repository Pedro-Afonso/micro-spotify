import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { IMusic } from '../../redux/models/IMusic'
import { ArtistCard } from '.'

describe('ArtistCard component', () => {
  const props = {
    song: {
      images: { background: '/' },
      subtitle: 'José'
    } as IMusic,
    navigate: vi.fn()
  }

  it('should render an image element with alt and src attributes', () => {
    render(<ArtistCard {...props} />)

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', props.song.images.background)
    expect(img).toHaveAttribute('alt', props.song.subtitle)
  })

  it('should render the component with title element', () => {
    render(<ArtistCard {...props} />)

    const title = screen.getByRole('heading', { level: 3 })

    expect(title).toHaveTextContent(props.song.subtitle)
  })
})
