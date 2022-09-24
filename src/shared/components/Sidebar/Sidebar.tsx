import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { useSidebarContext } from '../../context/SidebarContext'

interface IListItemLinkProps {
  to: string
  label: string
  /* icon: string */
  onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  label,
  /* icon, */
  onClick
}) => {
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
        {/*       <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon> */}
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

  const { isSidebarOpen, toggleSidebar, sidebarOptions } = useSidebarContext()

  /* const { themeName, toggleTheme } = useAppThemeContext() */

  return (
    <>
      <Drawer
        open={isSidebarOpen}
        variant={smDown ? 'temporary' : 'permanent'}
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
            {/* <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
            /> */}
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {sidebarOptions.map(sidebarOption => (
                <ListItemLink
                  key={sidebarOption.path}
                  /* icon={sidebarOption.icon} */
                  label={sidebarOption.label}
                  to={sidebarOption.path}
                  onClick={smDown ? toggleSidebar : undefined}
                />
              ))}
            </List>
          </Box>
          {/*           <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'dark' ? <LightMode /> : <DarkMode />}
                </ListItemIcon>
                <ListItemText
                  primary={
                    themeName === 'dark'
                      ? 'Acender as luzes'
                      : 'Desligar as luzes'
                  }
                ></ListItemText>
              </ListItemButton>
            </List>
          </Box> */}
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
