import { Box, Grow, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useGetSongByCountryQuery } from '../../shared/redux/services/shazamCore'
import { SongCard } from '../../shared/components'

export const AroundYou = () => {
  const { isFetching, error, data } = useGetSongByCountryQuery('PT')

  const navigate = useNavigate()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box>
      <Box>
        <Typography variant="h2">Radar</Typography>
      </Box>
      <Grow in={!!data} timeout={2000}>
        <Box
          display="flex"
          justifyContent="space-around"
          gap={2}
          flexWrap="wrap"
        >
          {data?.map(song => (
            <SongCard key={song.key} song={song} navigate={navigate} />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
