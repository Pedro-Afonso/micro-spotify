import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Sidebar } from './shared/components'
import { AppSidebarProvider } from './shared/context/SidebarContext'

import { Provider } from 'react-redux'
import { store } from './shared/redux/store'

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppSidebarProvider>
          <Sidebar>
            <AppRoutes />
          </Sidebar>
        </AppSidebarProvider>
      </Provider>
    </BrowserRouter>
  )
}
