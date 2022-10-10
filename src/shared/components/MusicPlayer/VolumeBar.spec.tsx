import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { VolumeBar } from './VolumeBar'

describe('Track component', () => {
  const props = {
    value: 0.5,
    min: 0,
    max: 1,
    setVolume: vi.fn()
  }

  it('should render an slider element with min, max, step and value props', () => {
    render(<VolumeBar {...props} />)

    const slider = screen.getByRole('slider', { name: 'Volume' })

    expect(slider).toHaveAttribute('type', 'range')
    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('max', '1')
    expect(slider).toHaveAttribute('step', '0.01')
    expect(slider).toHaveValue('0.5')
  })

  it('should test setVolume function in VolumeDown icon button', () => {
    render(<VolumeBar {...props} />)

    const volumeUp = screen.getByRole('button', { name: /mínimo/i })

    fireEvent.click(volumeUp)

    expect(props.setVolume).toHaveBeenCalled()
  })

  it('should test setVolume function in VolumeUp icon button', () => {
    render(<VolumeBar {...props} />)

    const volumeDown = screen.getByRole('button', { name: /máximo/i })

    fireEvent.click(volumeDown)

    expect(props.setVolume).toHaveBeenCalled()
  })
})
