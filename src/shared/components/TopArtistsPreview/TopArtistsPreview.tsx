import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { IMusic } from '../../redux/models/IMusic'

interface ITopArtistsPreviewProps {
  data: IMusic[]
  length: number
}

export const TopArtistsPreview: React.FC<ITopArtistsPreviewProps> = ({
  data,
  length
}) => {
  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingX={1}
        paddingY={1}
      >
        <Typography>Top Artistas</Typography>
        <Link to="/top-artists">
          <Typography>ver mais</Typography>
        </Link>
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
              component={Link}
              to={`/artists/${song.artists[0].adamid}`}
              sx={[
                { width: '4rem', height: '4rem' },
                smUp && { width: '6rem', height: '6rem' }
              ]}
              key={song.key}
              src={song.images.background}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
