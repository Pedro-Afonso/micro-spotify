import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Discover } from '../pages'
import { useSidebarContext } from '../shared/context/SidebarContext'

export const AppRoutes = () => {
  const { setSidebarOptions } = useSidebarContext()

  useEffect(() => {
    setSidebarOptions([{ path: '/', label: 'Descobrir' }])
  }, [setSidebarOptions])

  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
