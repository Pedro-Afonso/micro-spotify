import { AppSidebarProvider } from './shared/context/SidebarContext'
import { Sidebar, MusicPlayer } from './shared/components'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

import { store } from './shared/redux/store'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import { TopPlay } from './shared/components/TopPlay/TopPlay'

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
        <AppSidebarProvider>
          <Sidebar>
            <MusicPlayer>
              <TopPlay>
                <AppRoutes />
              </TopPlay>
            </MusicPlayer>
          </Sidebar>
        </AppSidebarProvider>
      </Provider>
    </BrowserRouter>
  )
}
