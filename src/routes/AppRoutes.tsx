import { Routes, Route } from 'react-router-dom'
import { Discover } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Discover />} />
    </Routes>
  )
}
