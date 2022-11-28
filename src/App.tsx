import { AppSidebarProvider } from './shared/context/SidebarContext'
import { Sidebar, MusicPlayer, SearchBar } from './shared/components'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

import { store } from './shared/redux/store'
import { Provider } from 'react-redux'
import { CssBaseline, Grid } from '@mui/material'
import { TopPlay } from './shared/components/TopPlay/TopPlay'
import { AppThemeProvider } from './shared/context/ThemeContext'

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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  order={{ xs: 1, lg: 1 }}
                >
                  <SearchBar />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  order={{ xs: 3, lg: 2 }}
                >
                  {/* Current page */}
                  <AppRoutes />
                  {/* /Current page */}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  order={{ xs: 2, lg: 3 }}
                >
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
