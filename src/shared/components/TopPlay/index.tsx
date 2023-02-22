import { Box } from '@mui/material'

import { TopArtistsPreview } from '../TopArtistsPreview'
import { TopChartsPreview } from '../TopChartsPreview'
import { useGetTopChartsQuery } from '@/services'

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
