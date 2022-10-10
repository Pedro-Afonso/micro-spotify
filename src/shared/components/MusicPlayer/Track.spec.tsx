import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IMusic } from '../../redux/models/IMusic'
import { Track } from './Track'

describe('Track component', () => {
  const props = {
    images: { coverart: '/' },
    title: 'testtitle',
    subtitle: 'testesubtitle'
  } as IMusic

  it('should render an image element with alt and src attributes', () => {
    render(<Track activeSong={props} />)

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', props.images.coverart)
    expect(img).toHaveAttribute('alt', props.title)
  })

  it('should render the component with title element', () => {
    render(<Track activeSong={props} />)

    const title = screen.getByLabelText(/título/i)

    expect(title).toHaveTextContent(props.title)
  })

  it('should render the component with subtitle element', () => {
    render(<Track activeSong={props} />)

    const subtitle = screen.getByLabelText(/artista/i)

    expect(subtitle).toHaveTextContent(props.subtitle)
  })
})
