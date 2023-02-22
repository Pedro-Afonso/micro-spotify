import { Box, Stack, Slider, IconButton } from '@mui/material'
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'

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
  return (
    <Box flex={1} sx={{ width: 200 }}>
      <Stack
        spacing={{ sx: 0, md: 2 }}
        direction={{ sx: 'column', md: 'row' }}
        sx={{ mb: 1 }}
        alignItems="center"
      >
        <IconButton aria-label="Mínimo" onClick={() => setVolume(0)}>
          <VolumeDown />
        </IconButton>
        <Slider
          aria-label="Volume"
          step={0.01}
          min={min}
          max={max}
          value={value}
          onChange={(_, newValue) => setVolume(newValue as number)}
        />
        <IconButton aria-label="Máximo" onClick={() => setVolume(1)}>
          <VolumeUp />
        </IconButton>
      </Stack>
    </Box>
  )
}
