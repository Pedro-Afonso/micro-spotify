import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  Box,
  CardActionArea
} from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { PlayPauseCard } from '../PlayPauseButton'

interface ISongCardProps {
  song: IMusic
  navigate: (value: string) => void
}

export const SongCard: React.FC<ISongCardProps> = ({ song, navigate }) => {
  if (!song?.images?.coverart) return <></>

  return (
    <Card
      sx={{
        maxWidth: 230,
        flexBasis: 200,
        flexShrink: 1,
        flexGrow: 1
      }}
    >
      <Box position="relative">
        <CardActionArea onClick={() => navigate(`/songs/${song?.key}`)}>
          <CardMedia
            component="img"
            height="200"
            image={song?.images?.coverart}
            alt={song?.title}
          />
        </CardActionArea>
        <Box
          position="absolute"
          bottom={16}
          right={16}
          bgcolor="#c2c2c2"
          borderRadius="50%"
        >
          <PlayPauseCard song={song} />
        </Box>
      </Box>
      <CardActions>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          overflow="hidden"
        >
          <Typography
            variant="h3"
            fontSize={14}
            fontWeight={600}
            whiteSpace="nowrap"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(`/songs/${song?.key}`)}
          >
            {song?.title}
          </Typography>
          <Typography
            variant="h4"
            fontSize={14}
            whiteSpace="nowrap"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(`/artists/${song.artists[0].adamid}`)}
          >
            {song?.subtitle}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}
