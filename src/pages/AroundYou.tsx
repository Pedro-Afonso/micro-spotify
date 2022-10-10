import { Box, Grow, Typography } from '@mui/material'
import { SongCard } from '../shared/components'
import { useGetSongByCountryQuery } from '../shared/redux/services/shazamCore'

export const AroundYou = () => {
  const { isFetching, error, data } = useGetSongByCountryQuery('PT')

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
            <SongCard key={song.key} song={song} />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
