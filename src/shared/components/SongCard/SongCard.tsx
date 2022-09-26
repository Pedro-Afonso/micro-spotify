import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Box,
  Button
} from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { playPause, setActiveSong } from '../../redux/slices/playerSlice'
import { useAppDispatch } from '../../redux/store'

interface ISongCardProps {
  song: IMusic
}

export const SongCard: React.FC<ISongCardProps> = ({ song }) => {
  const dispatch = useAppDispatch()

  const handlePlayPauseClick = () => {
    dispatch(setActiveSong({ song }))
    dispatch(playPause(true))
  }

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
        <Button onClick={handlePlayPauseClick}>Play</Button>
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
