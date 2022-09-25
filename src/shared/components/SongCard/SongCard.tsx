import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Box
} from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'

interface ISongCardProps {
  song: IMusic
}

export const SongCard: React.FC<ISongCardProps> = ({ song }) => {
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={song.images.coverart}
          alt={song.title}
        />
      </CardActionArea>
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
