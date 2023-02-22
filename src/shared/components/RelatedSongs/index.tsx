import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { SongBar } from '../SongBar'
import { IMusic } from '@/types'

interface IRelatedSongsProps {
  data?: IMusic[]
}

export const RelatedSongs: React.FC<IRelatedSongsProps> = ({ data }) => {
  const navigate = useNavigate()

  return (
    <Box>
      <Box>
        <Typography>Músicas Relacionadas:</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        {data
          ?.filter(song => !!song.hub.actions)
          .map((song, key) => (
            <SongBar
              key={song.key}
              position={key}
              song={song}
              navigate={navigate}
            />
          ))}
      </Box>
    </Box>
  )
}
