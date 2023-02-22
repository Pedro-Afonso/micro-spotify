import { Box, Typography, Grow } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useGetTopChartsQuery } from '@/services'
import { ArtistCard } from '@/components'

export const TopArtists = () => {
  const navigate = useNavigate()

  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box>
      <Box>
        <Typography variant="h2">Top Artistas</Typography>
      </Box>
      <Grow in={!!data} timeout={2000}>
        <Box
          display="flex"
          gap={2}
          justifyContent="space-around"
          flexWrap="wrap"
        >
          {data?.map(song => (
            <ArtistCard key={song.key} song={song} navigate={navigate} />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
