import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Discover, SongDetails, ArtistDetails, AroundYou } from '../pages'
import { useSidebarContext } from '../shared/context/SidebarContext'

export const AppRoutes = () => {
  const { setSidebarOptions } = useSidebarContext()

  useEffect(() => {
    setSidebarOptions([
      { path: '/', label: 'Descobrir' },
      { path: '/around-you', label: 'Radar' }
    ])
  }, [setSidebarOptions])

  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/around-you" element={<AroundYou />} />
      <Route path="/songs/:songid" element={<SongDetails />} />
      <Route path="/artists/:artistid" element={<ArtistDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
