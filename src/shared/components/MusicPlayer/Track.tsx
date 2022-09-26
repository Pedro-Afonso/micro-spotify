import { Avatar, Box, Typography } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'

interface ITrackProps {
  activeSong: IMusic | null
}

export const Track: React.FC<ITrackProps> = ({ activeSong }) => {
  return (
    <Box display="flex" alignItems="center" gap={2} flex={1}>
      <Avatar
        sx={{ width: '4rem', height: '4rem' }}
        src={activeSong?.images.coverart}
        alt={activeSong?.title}
      />
      <Box>
        <Typography fontSize="small">
          {activeSong?.title ? activeSong.title : '...'}
        </Typography>
        <Typography fontSize="small">
          {activeSong?.subtitle ? activeSong.subtitle : '...'}
        </Typography>
      </Box>
    </Box>
  )
}
