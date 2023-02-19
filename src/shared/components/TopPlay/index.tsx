import { Box } from '@mui/material'
import { useGetTopChartsQuery } from '../../redux/services/shazamCore'
import { TopArtistsPreview } from '../TopArtistsPreview'
import { TopChartsPreview } from '../TopChartsPreview'

export const TopPlay = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  return (
    <>
      <Box display="flex" flexDirection="column" padding={1}>
        {!isFetching && !error && data && (
          <>
            <TopChartsPreview data={data} length={5} />
            <TopArtistsPreview data={data} length={3} />
          </>
        )}
      </Box>
      {/* <Box>{children}</Box> */}
    </>
  )
}
