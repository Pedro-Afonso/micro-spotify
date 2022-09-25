import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material'
import { useEffect } from 'react'
import { useGetTopChartsQuery } from '../shared/redux/services/shazamCore'

export const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <p>Carregando...</p>

  if (error) return <p>Oops! Ocorreu algum erro...</p>

  return <div>Discover</div>
}
