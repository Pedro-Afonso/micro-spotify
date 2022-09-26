import { Box, Stack, Slider } from '@mui/material'
import { VolumeUp, VolumeDown } from '@mui/icons-material'

interface IVolumeBarProps {
  value: number
  min: number
  max: number
  setVolume: (value: number) => void
}

export const VolumeBar: React.FC<IVolumeBarProps> = ({
  value,
  min,
  max,
  setVolume
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number)
  }

  return (
    <Box flex={1} sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown onClick={() => setVolume(0)} />
        <Slider
          aria-label="Volume"
          step={0.01}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <VolumeUp onClick={() => setVolume(1)} />
      </Stack>
    </Box>
  )
}
