import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IMusic } from '../../redux/models/IMusic'
import { SongCard } from './SongCard'

describe('SongCard component', () => {
  const song = {
    title: 'Teste do José',
    images: { coverart: '/' },
    subtitle: 'José'
  } as IMusic

  it('should render the component with alt text', () => {
    render(<SongCard song={song} />)

    const altText = screen.getByRole('img')

    expect(altText).toBeInTheDocument()
  })

  it('should render the component with title element', () => {
    render(<SongCard song={song} />)

    const title = screen.getByRole('heading', { name: song.title })

    expect(title).toBeInTheDocument()
  })

  it('should render the component with subtitle element', () => {
    render(<SongCard song={song} />)

    const subtitle = screen.getByRole('heading', { name: song.subtitle })

    expect(subtitle).toBeInTheDocument()
  })
})
