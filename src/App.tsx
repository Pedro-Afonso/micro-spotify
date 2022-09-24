import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Sidebar } from './shared/components'
import { AppSidebarProvider } from './shared/context/SidebarContext'

export const App = () => {
  return (
    <BrowserRouter>
      <AppSidebarProvider>
        <Sidebar>
          <AppRoutes />
        </Sidebar>
      </AppSidebarProvider>
    </BrowserRouter>
  )
}
