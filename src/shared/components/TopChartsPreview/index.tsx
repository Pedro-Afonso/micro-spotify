import { Box, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { IMusic } from '../../redux/models/IMusic'
import { SongBar } from '../SongBar'

interface ITopChartsPreviewProps {
  data: IMusic[]
  length: number
}

export const TopChartsPreview: React.FC<ITopChartsPreviewProps> = ({
  data,
  length
}) => {
  const navigate = useNavigate()

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingX={1}
        paddingY={1}
      >
        <Typography>Top Charts</Typography>
        <Link to="/top-charts">
          <Typography>ver mais</Typography>
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={1}
        paddingX={1}
      >
        {data.slice(0, length).map((song, key) => (
          <SongBar key={key} position={key} song={song} navigate={navigate} />
        ))}
      </Box>
    </Box>
  )
}
