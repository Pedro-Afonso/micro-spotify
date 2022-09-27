import { Box, Typography } from '@mui/material'
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
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" paddingX={1}>
        <Typography>Top Charts</Typography>
        <Typography>ver mais</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={1}
        paddingX={1}
      >
        {data.slice(0, length).map((song, key) => (
          <SongBar key={key} position={key} song={song} />
        ))}
      </Box>
    </Box>
  )
}
