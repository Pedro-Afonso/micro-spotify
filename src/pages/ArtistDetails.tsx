import { Box, Typography, Grow } from '@mui/material'
import { useParams } from 'react-router-dom'
import { DetailsHeader, Discography } from '../shared/components'
import { useGetArtistDetailsQuery } from '../shared/redux/services/shazamCore'

export const ArtistDetails = () => {
  const { artistid } = useParams()

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error: artistDetailsError
  } = useGetArtistDetailsQuery({ artistid })

  if (isFetchingArtistDetails) return <p>Carregando...</p>

  if (artistDetailsError) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box paddingX={2}>
      <DetailsHeader artistid={artistid} artistData={artistData} />
      <Grow in={!!artistData} timeout={2000}>
        <Box>
          {artistData ? (
            <Discography artistData={artistData} />
          ) : (
            <Typography> Nenhuma letra foi encontrada. </Typography>
          )}
        </Box>
      </Grow>
    </Box>
  )
}
