import { Avatar, Box, Typography } from '@mui/material'

import { useAppSelector } from '@/config/store'
import { IMusic } from '@/types'

interface ITrackProps {
  activeSong: IMusic | null
}

export const Track: React.FC<ITrackProps> = ({ activeSong }) => {
  const isPlaying = useAppSelector(state => state.player.isPlaying)

  return (
    <Box display="flex" alignItems="center" gap={2} flex={1}>
      <Avatar
        sx={[
          { width: '4rem', height: '4rem' },
          {
            '@keyframes rotating': {
              from: {
                transform: 'rotate(0deg)'
              },
              to: {
                transform: 'rotate(360deg)'
              }
            }
          },
          isPlaying && {
            animation: 'rotating 2s linear infinite'
          }
        ]}
        src={activeSong?.images.coverart}
        alt={activeSong?.title}
      />
      <Box>
        <Typography aria-label="Título" fontSize="small">
          {activeSong?.title ? activeSong.title : '...'}
        </Typography>
        <Typography aria-label="Artista" fontSize="small">
          {activeSong?.subtitle ? activeSong.subtitle : '...'}
        </Typography>
      </Box>
    </Box>
  )
}
