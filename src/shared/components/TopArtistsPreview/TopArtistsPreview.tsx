import { Avatar, Box, Typography } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'

interface ITopArtistsPreviewProps {
  data: IMusic[]
  length: number
}

export const TopArtistsPreview: React.FC<ITopArtistsPreviewProps> = ({
  data,
  length
}) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" paddingX={1}>
        <Typography>Top Artistas</Typography>
        <Typography>ver mais</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX={2}
          gap={4}
        >
          {data.slice(0, length).map(song => (
            <Avatar
              sx={{ width: '6rem', height: '6rem' }}
              key={song.key}
              src={song.images.background}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
