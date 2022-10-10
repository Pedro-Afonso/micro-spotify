import { Card, CardActions, CardMedia, Typography, Box } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { PlayPauseCard } from '../PlayPauseButton'

interface ISongCardProps {
  song: IMusic
}

export const SongCard: React.FC<ISongCardProps> = ({ song }) => {
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
        <Box
          position="absolute"
          bottom={16}
          right={16}
          bgcolor="#c2c2c2"
          borderRadius="50%"
        >
          <PlayPauseCard song={song} />
        </Box>

        <CardMedia
          component="img"
          height="200"
          image={song.images.coverart}
          alt={song.title}
        />
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
          >
            {song.title}
          </Typography>
          <Typography variant="h4" fontSize={14} whiteSpace="nowrap">
            {song.subtitle}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  )
}
