import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { useSidebarContext } from '../../context/SidebarContext'

interface IListItemLinkProps {
  to: string
  label: string
  onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, label, onClick }) => {
  const navigate = useNavigate()
  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to)
    onClick?.()
  }

  return (
    <ListItem>
      <ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemText primary={label}></ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

interface ISidebarProps {
  children: React.ReactNode
}
export const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  const { isSidebarOpen, toggleSidebar, sidebarOptions } = useSidebarContext()

  return (
    <>
      <Drawer
        open={isSidebarOpen}
        variant={mdDown ? 'temporary' : 'permanent'}
        onClose={toggleSidebar}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography component="h1" fontSize={32} fontWeight={700}>
              Micro Spotify
            </Typography>
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {sidebarOptions.map(sidebarOption => (
                <ListItemLink
                  key={sidebarOption.path}
                  label={sidebarOption.label}
                  to={sidebarOption.path}
                  onClick={smDown ? toggleSidebar : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box
        height="100vh"
        paddingX="1rem"
        marginLeft={mdDown ? 0 : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  )
}
