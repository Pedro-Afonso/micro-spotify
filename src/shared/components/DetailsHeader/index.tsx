import { Avatar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { IArtistDetails, IMusicDetails } from '@/types'

interface IDetailsHeaderProps {
  artistid?: string
  artistData?: IArtistDetails
  songData?: IMusicDetails
}

export const DetailsHeader: React.FC<IDetailsHeaderProps> = ({
  artistid,
  artistData,
  songData
}) => {
  return (
    <Box display="flex" alignItems="center" gap={2} paddingY={2}>
      <Avatar
        sx={{ height: '128px', width: '128px' }}
        src={
          artistid
            ? artistData?.artists[artistid].attributes?.artwork?.url
                .replace('{w}', '500')
                .replace('{h}', '500')
            : songData?.images?.coverart
        }
      />
      <Box>
        <Typography>
          {artistid
            ? artistData?.artists[artistid].attributes.name
            : songData?.title}
        </Typography>
        <Link
          to={
            artistid
              ? `/artists/${songData?.artists[0]?.adamid}`
              : `/artists/${songData?.artists[0]?.adamid}`
          }
        >
          <Typography>
            {artistid ? songData?.subtitle : songData?.subtitle}
          </Typography>
        </Link>
        <Typography>
          {artistid ? songData?.genres?.primary : songData?.genres?.primary}
        </Typography>
      </Box>
    </Box>
  )
}
