import { Box, Card, Typography, CardMedia } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { PlayPauseCard } from '../PlayPauseButton'

interface ISongBarProps {
  position: number
  song: IMusic
  navigate: (value: string) => void
}

export const SongBar: React.FC<ISongBarProps> = ({
  song,
  position,
  navigate
}) => {
  if (!song?.images?.coverart) return <></>

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography marginX={0.5}>{position + 1}.</Typography>
          <Box>
            <CardMedia
              component="img"
              height="48"
              image={song?.images?.coverart}
              alt={song?.title}
            />
          </Box>
          <Box marginLeft={1}>
            <Typography
              variant="h3"
              fontSize="1rem"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(`/songs/${song?.key}`)}
            >
              {song?.title}
            </Typography>
            <Typography
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(`/artists/${song.artists[0].adamid}`)}
            >
              {song?.subtitle}
            </Typography>
          </Box>
        </Box>

        <PlayPauseCard song={song} />
      </Box>
    </Card>
  )
}
