import { CssBaseline, Grid } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AppRoutes } from './routes/AppRoutes'

import { Sidebar, MusicPlayer, SearchBar, TopPlay } from '@/components'
import { AppThemeProvider, AppSidebarProvider } from '@/contexts'
import { store } from '@/config/store'

export const App = () => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <CssBaseline />
        <Provider store={store}>
          <AppSidebarProvider>
            <Sidebar>
              {/* Responsive Layout */}
              <Grid container>
                <Grid item xs={12} lg={8} order={{ xs: 1, lg: 1 }}>
                  <SearchBar />
                </Grid>
                <Grid item xs={12} lg={8} order={{ xs: 3, lg: 2 }}>
                  {/* Current page */}
                  <AppRoutes />
                  {/* /Current page */}
                </Grid>
                <Grid item xs={12} lg={4} order={{ xs: 2, lg: 3 }}>
                  <TopPlay />
                </Grid>
              </Grid>
              {/* /Responsive Layout */}

              <MusicPlayer />
            </Sidebar>
          </AppSidebarProvider>
        </Provider>
      </AppThemeProvider>
    </BrowserRouter>
  )
}
