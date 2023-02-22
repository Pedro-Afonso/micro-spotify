import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import PauseRounded from '@mui/icons-material/PauseRounded'
import { IconButton } from '@mui/material'

import { playPause, setActiveSong } from '@/slices/playerSlice'
import { useAppDispatch, useAppSelector } from '@/config/store'
import { IMusic } from '@/types'

interface IPlayPauseCardProps {
  song: IMusic
}

export const PlayPauseCard: React.FC<IPlayPauseCardProps> = ({ song }) => {
  const dispatch = useAppDispatch()
  const { activeSong, isPlaying } = useAppSelector(state => state.player)

  const isActive = activeSong?.title === song.title

  const handlePlayPauseClick = () => {
    if (isActive && isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(setActiveSong({ song }))
      dispatch(playPause(true))
    }
  }

  return (
    <IconButton
      aria-label={isPlaying ? 'pause' : 'play'}
      onClick={handlePlayPauseClick}
    >
      {isActive && isPlaying ? (
        <PauseRounded sx={{ fontSize: '2rem' }} />
      ) : (
        <PlayArrowRounded sx={{ fontSize: '2rem' }} />
      )}
    </IconButton>
  )
}
