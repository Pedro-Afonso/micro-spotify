import { Box, Typography, Grow } from '@mui/material'
import { useParams } from 'react-router-dom'
import { DetailsHeader, RelatedSongs } from '../../shared/components'
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery
} from '../../shared/redux/services/shazamCore'

export const SongDetails = () => {
  const { songid } = useParams()

  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: songDetailsError
  } = useGetSongDetailsQuery({ songid })

  const {
    data: relatedSongData,
    isFetching: isFetchingRelatedSong,
    error: RelatedSongError
  } = useGetSongRelatedQuery({ songid })

  if (isFetchingSongDetails || isFetchingRelatedSong)
    return <p>Carregando...</p>

  if (songDetailsError || RelatedSongError)
    return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box paddingX={2}>
      <DetailsHeader songData={songData} />
      <Grow in={!!songData} timeout={2000}>
        <Box>
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text?.map((line, key) => (
              <Typography key={key}>{line}</Typography>
            ))
          ) : (
            <Typography> Nenhuma letra foi encontrada. </Typography>
          )}
        </Box>
      </Grow>
      <Box>
        <RelatedSongs data={relatedSongData} />
      </Box>
    </Box>
  )
}
