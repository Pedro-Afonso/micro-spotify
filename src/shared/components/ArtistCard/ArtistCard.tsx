import { Card, CardMedia, CardActionArea, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IMusic } from '../../redux/models/IMusic'

interface IArtistCardProps {
  song: IMusic
}

export const ArtistCard: React.FC<IArtistCardProps> = ({ song }) => {
  const navigate = useNavigate()
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea
        onClick={() => navigate(`/artists/${song.artists[0].adamid}`)}
      >
        <CardMedia
          component="img"
          height="200"
          image={song.images.background}
          alt={song.subtitle}
        />
      </CardActionArea>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding={1}
        overflow="hidden"
      >
        <Typography variant="h3" fontSize={14} whiteSpace="nowrap">
          {song.subtitle}
        </Typography>
      </Box>
    </Card>
  )
}
