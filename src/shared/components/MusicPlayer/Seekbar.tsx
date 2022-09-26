import { Slider, Box, Typography } from '@mui/material'

interface ISeekbarProps {
  value: number
  min: number
  max: number
  /* onInput: number */
  setSeekTime: (value: number) => void
  /* appTime: number */
}

export const Seekbar: React.FC<ISeekbarProps> = ({
  value,
  min,
  max,
  /* onInput, */
  setSeekTime
  /* appTime */
}) => {
  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60)
    const secondLeft = Math.ceil(value - minute * 60)
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
  }

  return (
    <Box width={'75%'}>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={value}
        min={min}
        step={1}
        max={max}
        onChange={(_, newValue) => setSeekTime(newValue as number)}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography fontSize={'0.75rem'}>{formatDuration(value)}</Typography>
        <Typography fontSize={'0.75rem'}>
          -{formatDuration(max - value)}
        </Typography>
      </Box>
    </Box>
  )
}
