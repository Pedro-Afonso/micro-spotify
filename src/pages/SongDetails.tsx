import { Box, Typography, Grow } from '@mui/material'
import { useParams } from 'react-router-dom'
import { DetailsHeader } from '../shared/components/DetailsHeader'
import { useGetSongDetailsQuery } from '../shared/redux/services/shazamCore'

export const SongDetails = () => {
  const { songid } = useParams()

  const { data, isFetching, error } = useGetSongDetailsQuery({ songid })

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box paddingX={2}>
      <DetailsHeader songData={data} />
      <Grow in={!!data} timeout={2000}>
        <Box>
          {data?.sections[1].type === 'LYRICS' ? (
            data?.sections[1].text?.map((line, key) => (
              <Typography key={key}>{line}</Typography>
            ))
          ) : (
            <Typography> Nenhuma letra foi encontrada. </Typography>
          )}
        </Box>
      </Grow>
    </Box>
  )
}
