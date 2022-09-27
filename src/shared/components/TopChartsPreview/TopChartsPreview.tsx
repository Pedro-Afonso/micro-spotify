import { Box, Card, Typography, CardMedia } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { PlayPauseCard } from '../PlayPauseButton/PlayPauseButton'

interface ITopChartsCardProps {
  position: number
  song: IMusic
}

const TopChartCard: React.FC<ITopChartsCardProps> = ({ song, position }) => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography>{position + 1}.</Typography>
          <CardMedia
            component="img"
            height="48"
            image={song.images.coverart}
            alt={song.title}
          />
        </Box>

        <PlayPauseCard song={song} />
      </Box>
    </Card>
  )
}

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
          <TopChartCard key={key} position={key} song={song} />
        ))}
      </Box>
    </Box>
  )
}
