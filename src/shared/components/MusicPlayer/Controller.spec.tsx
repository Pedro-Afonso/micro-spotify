import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Controller } from './Controller'

describe('Controller component', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  it('should render the component with play button element', () => {
    const props = {
      handlePlayPause: vi.fn,
      isPlaying: false
    }
    render(<Controller {...props} />)

    const playButton = screen.getByRole('button', { name: /play/i })
    const playButtonIcon = screen.getByTestId('PlayArrowRoundedIcon')

    expect(playButton).toBeInTheDocument()
    expect(playButtonIcon).toBeInTheDocument()
  })

  it('should render the component with pause button element', () => {
    const props = {
      handlePlayPause: vi.fn,
      isPlaying: true
    }
    render(<Controller {...props} />)

    const pauseButton = screen.getByRole('button', { name: /pause/i })
    const pauseButtonIcon = screen.getByTestId('PauseRoundedIcon')

    expect(pauseButton).toBeInTheDocument()
    expect(pauseButtonIcon).toBeInTheDocument()
  })

  it('should test handlePlayPause function', () => {
    const props = {
      handlePlayPause: vi.fn(),
      isPlaying: true
    }
    render(<Controller {...props} />)

    const pauseButton = screen.getByRole('button', { name: /pause/i })

    fireEvent.click(pauseButton)

    expect(props.handlePlayPause).toHaveBeenCalled()
  })
})
