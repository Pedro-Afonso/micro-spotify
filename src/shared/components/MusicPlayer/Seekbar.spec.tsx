import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Seekbar } from './Seekbar'

describe('Seekbar component', () => {
  const props = {
    value: 90,
    min: 0,
    max: 100,
    setSeekTime: vi.fn()
  }

  it('should render an slider element with min, max and value props', () => {
    render(<Seekbar {...props} />)

    const slider = screen.getByRole('slider', { name: /Indicador de tempo/i })

    expect(slider).toHaveAttribute('type', 'range')
    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('max', props.max.toString())
    expect(slider).toHaveValue(props.value.toString())
    /*
     */
  })

  it('should test setSeekTime function in slider', () => {
    render(<Seekbar {...props} />)

    const slider = screen.getByRole('slider', { name: /Indicador de tempo/i })

    fireEvent.change(slider, { target: { value: 25 } })

    expect(props.setSeekTime).toHaveBeenCalled()
  })

  it('should format duration', () => {
    render(<Seekbar {...props} />)

    const duration = screen.getByLabelText(/Duração/i)

    expect(duration).toHaveTextContent('1:30')
  })

  it('should format the remaining time', () => {
    render(<Seekbar {...props} />)

    const duration = screen.getByLabelText(/restante/i)

    expect(duration).toHaveTextContent('-0:10')
  })
})
