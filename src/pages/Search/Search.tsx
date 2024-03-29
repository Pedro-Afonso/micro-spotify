import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, Grow } from '@mui/material'

import { useGetSongsBySearchQuery } from '@/services'
import { SongCard } from '@/components'

export const Search = () => {
  const { searchTerm } = useParams()

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  const navigate = useNavigate()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box>
      <Box>
        <Typography variant="h2">{`Buscar por ${searchTerm || ''}`}</Typography>
      </Box>
      <Grow in={!!data?.tracks} timeout={2000}>
        <Box
          display="flex"
          justifyContent="space-around"
          gap={2}
          flexWrap="wrap"
        >
          {data?.tracks?.hits.map(({ track: song }, key) => (
            <SongCard key={key} song={song} navigate={navigate} />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
