import { Box, Typography, Card, CardMedia } from '@mui/material'
import { IArtistDetails, Song } from '@/types'

interface ISongBarProps {
  position: number
  song: Song
}

const SongBar: React.FC<ISongBarProps> = ({ song, position }) => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography>{position + 1}.</Typography>
          <Box>
            <CardMedia
              component="img"
              height="48"
              image={song.attributes?.artwork.url
                .replace('{w}', '500')
                .replace('{h}', '500')}
              alt={song.attributes?.albumName}
            />
          </Box>
          <Box marginLeft={1}>
            <Typography>{song.attributes?.name}</Typography>
            <Typography>{song.attributes?.albumName}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

interface IDiscographyProps {
  artistData?: IArtistDetails
}

export const Discography: React.FC<IDiscographyProps> = ({ artistData }) => {
  return (
    <Box>
      <Box>
        <Typography>Músicas Relacionadas:</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        {artistData &&
          Object.values(artistData?.songs).map((song, key) => (
            <SongBar key={key} position={key} song={song} />
          ))}
      </Box>
    </Box>
  )
}
