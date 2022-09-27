import { Box, useTheme } from '@mui/material'
import { useGetTopChartsQuery } from '../../redux/services/shazamCore'
import { TopArtistsPreview } from '../TopArtistsPreview'
import { TopChartsPreview } from '../TopChartsPreview'

interface ITopPlayProps {
  children: React.ReactNode
}

export const TopPlay: React.FC<ITopPlayProps> = ({ children }) => {
  const { data, isFetching, error } = useGetTopChartsQuery()
  const theme = useTheme()
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        right={0}
        top={0}
        paddingY={1}
        /* bottom={theme.spacing(14)} */
        width={theme.spacing(50)}
      >
        {!isFetching && !error && data && (
          <>
            <TopChartsPreview data={data} length={5} />
            <TopArtistsPreview data={data} length={3} />
          </>
        )}
      </Box>
      <Box marginRight={theme.spacing(50)}>{children}</Box>
    </>
  )
}
