import { Box, Typography, Grow } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArtistCard } from '../shared/components/ArtistCard'
import { IMusic } from '../shared/redux/models/IMusic'
import { useGetTopChartsQuery } from '../shared/redux/services/shazamCore'

export const TopArtists = () => {
  const navigate = useNavigate()

  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  const handleNavigate = (song: IMusic) => {
    navigate(`/artists/${song.artists[0].adamid}`)
  }

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
            <ArtistCard
              key={song.key}
              song={song}
              handleNavigate={handleNavigate}
            />
          ))}
        </Box>
      </Grow>
    </Box>
  )
}
