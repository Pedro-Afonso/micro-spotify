import { Box, Typography, Grow } from '@mui/material'
import { SongCard } from '../shared/components/SongCard'
import { useGetTopChartsQuery } from '../shared/redux/services/shazamCore'

export const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box>
      <Box>
        <Typography variant="h2">Descobrir</Typography>
      </Box>
      <Grow in={!!data} timeout={2000}>
        <Box display="flex" gap={4} flexWrap="wrap">
          {data?.map(song => (
            <SongCard key={song.key} song={song} />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
