import { Card, CardMedia, CardActionArea, Typography, Box } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'

interface IArtistCardProps {
  song: IMusic
  handleNavigate: (song: IMusic) => void
}

export const ArtistCard: React.FC<IArtistCardProps> = ({
  song,
  handleNavigate
}) => {
  const handleOnClick = () => {
    handleNavigate(song)
  }

  return (
    <Card
      sx={{
        maxWidth: 230,
        flexBasis: 200,
        flexShrink: 1,
        flexGrow: 1
      }}
    >
      <CardActionArea onClick={handleOnClick}>
        <CardMedia
          component="img"
          height="max-content"
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
