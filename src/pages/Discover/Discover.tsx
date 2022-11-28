import {
  Box,
  Typography,
  Grow,
  FormControl,
  Select,
  MenuItem
} from '@mui/material'
import { useGetSongsByGenreQuery } from '../../shared/redux/services/shazamCore'
import { useAppDispatch, useAppSelector } from '../../shared/redux/store'
import { setGenreListId } from '../../shared/redux/slices/playerSlice'
import { TGenre } from '../../shared/redux/models/TGenre'
import { SongCard } from '../../shared/components'
import { genres } from '../../shared/constants'
import { useNavigate } from 'react-router-dom'

export const Discover = () => {
  const genreOpt = useAppSelector(state => state.player.genreListId)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const { data, isFetching, error } = useGetSongsByGenreQuery(genreOpt || 'POP')

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return (
    <Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Typography variant="h2">
          Descobrir{' '}
          {genres.find(item => item.value === genreOpt)?.title || 'Pop'}
        </Typography>
        <FormControl>
          <Select
            MenuProps={{
              disableScrollLock: true
            }}
            value={genreOpt || 'POP'}
            onChange={e => dispatch(setGenreListId(e.target.value as TGenre))}
          >
            {genres.map(({ title, value }) => (
              <MenuItem key={value} value={value}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
