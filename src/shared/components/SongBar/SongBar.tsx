import { Box, Card, Typography, CardMedia } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { PlayPauseCard } from '../PlayPauseButton'

interface ISongBarProps {
  position: number
  song: IMusic
}

export const SongBar: React.FC<ISongBarProps> = ({ song, position }) => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography>{position + 1}.</Typography>
          <CardMedia
            component="img"
            height="48"
            image={song.images.coverart}
            alt={song.title}
          />
        </Box>

        <PlayPauseCard song={song} />
      </Box>
    </Card>
  )
}
