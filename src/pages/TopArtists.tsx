import { Box, Typography, Grow } from '@mui/material'
import { ArtistCard } from '../shared/components/ArtistCard'
import { useGetTopChartsQuery } from '../shared/redux/services/shazamCore'

export const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box>
      <Box>
        <Typography variant="h2">Top Artistas</Typography>
      </Box>
      <Grow in={!!data} timeout={2000}>
        <Box display="flex" gap={4} flexWrap="wrap">
          {data?.map(song => (
            <ArtistCard key={song.key} song={song} />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
