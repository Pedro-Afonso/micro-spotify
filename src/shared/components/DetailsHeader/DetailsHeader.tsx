import { Avatar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IMusicDetails } from '../../redux/models/IMusicDetails'

interface IDetailsHeaderProps {
  songData?: IMusicDetails
}

export const DetailsHeader: React.FC<IDetailsHeaderProps> = ({ songData }) => {
  return (
    <Box display="flex" alignItems="center" gap={2} paddingY={2}>
      <Avatar
        sx={{ height: '128px', width: '128px' }}
        src={songData?.images.coverart}
      />
      <Box>
        <Typography>{songData?.title}</Typography>
        <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
          <Typography> {songData?.subtitle}</Typography>
        </Link>
        <Typography> {songData?.genres?.primary}</Typography>
      </Box>
    </Box>
  )
}
