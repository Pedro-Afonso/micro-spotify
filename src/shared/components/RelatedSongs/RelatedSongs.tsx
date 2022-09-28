import { Box, Typography } from '@mui/material'
import { IMusic } from '../../redux/models/IMusic'
import { SongBar } from '../SongBar'

interface IRelatedSongsProps {
  data?: IMusic[]
}

export const RelatedSongs: React.FC<IRelatedSongsProps> = ({ data }) => {
  return (
    <Box>
      <Box>
        <Typography>Músicas Relacionadas:</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        {data
          ?.filter(song => !!song.hub.actions)
          .map((song, key) => (
            <SongBar key={song.key} position={key} song={song} />
          ))}
      </Box>
    </Box>
  )
}
