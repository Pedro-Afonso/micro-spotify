import { AppSidebarProvider } from './shared/context/SidebarContext'
import { Sidebar, MusicPlayer, SearchBar } from './shared/components'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

import { store } from './shared/redux/store'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
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
              <MusicPlayer>
                <SearchBar>
                  <TopPlay>
                    <AppRoutes />
                  </TopPlay>
                </SearchBar>
              </MusicPlayer>
            </Sidebar>
          </AppSidebarProvider>
        </Provider>
      </AppThemeProvider>
    </BrowserRouter>
  )
}
