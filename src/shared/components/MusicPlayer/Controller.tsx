import FastForwardRounded from '@mui/icons-material/FastForwardRounded'
import FastRewindRounded from '@mui/icons-material/FastRewindRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import PauseRounded from '@mui/icons-material/PauseRounded'
import { Box, IconButton } from '@mui/material'

interface IControllerProps {
  isPlaying: boolean
  handlePlayPause: () => void
}

export const Controller: React.FC<IControllerProps> = ({
  isPlaying,
  handlePlayPause
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton aria-label="previous song">
        <FastRewindRounded fontSize="medium" />
      </IconButton>

      <IconButton
        aria-label={isPlaying ? 'pause' : 'play'}
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <PauseRounded sx={{ fontSize: '2rem' }} />
        ) : (
          <PlayArrowRounded sx={{ fontSize: '2rem' }} />
        )}
      </IconButton>
      <IconButton aria-label="next song">
        <FastForwardRounded fontSize="medium" />
      </IconButton>
    </Box>
  )
}
