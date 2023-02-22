import { createContext, useCallback, useContext, useState } from 'react'

interface ISidebarOption {
  /* icon: string */
  label: string
  path: string
}

interface ISidebarContextData {
  isSidebarOpen: boolean
  sidebarOptions: ISidebarOption[]
  toggleSidebar: () => void
  setSidebarOptions: (newSidebarOptions: ISidebarOption[]) => void
}

interface IAppSidebarProvider {
  children: React.ReactNode
}

const SidebarContext = createContext({} as ISidebarContextData)

export const useSidebarContext = () => {
  return useContext(SidebarContext)
}

export const AppSidebarProvider: React.FC<IAppSidebarProvider> = ({
  children
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [sidebarOptions, setSidebarOptions] = useState<ISidebarOption[]>([])

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(oldSidebarOpen => !oldSidebarOpen)
  }, [])

  const handleSetSidebarOptions = useCallback(
    (newSidebarOptions: ISidebarOption[]) => {
      setSidebarOptions(newSidebarOptions)
    },
    []
  )

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        sidebarOptions,
        toggleSidebar,
        setSidebarOptions: handleSetSidebarOptions
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
