import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  Discover,
  SongDetails,
  ArtistDetails,
  AroundYou,
  TopCharts,
  TopArtists
} from '../pages'
import { Search } from '../pages/Search'
import { useSidebarContext } from '../shared/context/SidebarContext'

export const AppRoutes = () => {
  const { setSidebarOptions } = useSidebarContext()

  useEffect(() => {
    setSidebarOptions([
      { path: '/', label: 'Descobrir' },
      { path: '/around-you', label: 'Radar' },
      { path: '/top-charts', label: 'Top Charts' },
      { path: '/top-artists', label: 'Top Artistas' }
    ])
  }, [setSidebarOptions])

  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/top-charts" element={<TopCharts />} />
      <Route path="/around-you" element={<AroundYou />} />
      <Route path="/top-artists" element={<TopArtists />} />
      <Route path="/songs/:songid" element={<SongDetails />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/artists/:artistid" element={<ArtistDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
