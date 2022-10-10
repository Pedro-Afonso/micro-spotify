import { Slider, Box, Typography } from '@mui/material'

interface ISeekbarProps {
  value: number
  min: number
  max: number
  setSeekTime: (value: number) => void
}

export const Seekbar: React.FC<ISeekbarProps> = ({
  value,
  min,
  max,
  setSeekTime
}) => {
  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60)
    const secondLeft = Math.ceil(value - minute * 60)
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
  }

  return (
    <Box width={'75%'}>
      <Slider
        aria-label="Indicador de tempo"
        size="small"
        value={value}
        min={min}
        step={1}
        max={max}
        onChange={(_, newValue) => setSeekTime(newValue as number)}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography aria-label="Duração" fontSize={'0.75rem'}>
          {formatDuration(value)}
        </Typography>
        <Typography aria-label="Tempo restante" fontSize={'0.75rem'}>
          -{formatDuration(max - value)}
        </Typography>
      </Box>
    </Box>
  )
}
