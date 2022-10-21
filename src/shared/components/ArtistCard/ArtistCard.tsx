import { Card, CardMedia, CardActionArea, Typography, Box } from '@mui/material'

import { IMusic } from '../../redux/models/IMusic'

interface IArtistCardProps {
  song: IMusic
  navigate: (value: string) => void
}

export const ArtistCard: React.FC<IArtistCardProps> = ({ song, navigate }) => {
  if (!song?.images?.background) return <></>

  return (
    <Card
      sx={{
        maxWidth: 230,
        flexBasis: 200,
        flexShrink: 1,
        flexGrow: 1
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/artists/${song.artists[0].adamid}`)}
      >
        <CardMedia
          component="img"
          height="max-content"
          image={song?.images?.background}
          alt={song?.subtitle}
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
          {song?.subtitle}
        </Typography>
      </Box>
    </Card>
  )
}
