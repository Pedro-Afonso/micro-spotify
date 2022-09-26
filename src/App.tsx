import { AppSidebarProvider } from './shared/context/SidebarContext'
import { Sidebar, MusicPlayer } from './shared/components'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

import { store } from './shared/redux/store'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
        <AppSidebarProvider>
          <Sidebar>
            <MusicPlayer>
              <AppRoutes />
            </MusicPlayer>
          </Sidebar>
        </AppSidebarProvider>
      </Provider>
    </BrowserRouter>
  )
}
