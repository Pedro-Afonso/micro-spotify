import { createTheme, ThemeProvider } from '@mui/material'

interface IAppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children
}) => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif, monospace'
    }
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
