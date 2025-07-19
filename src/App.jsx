import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AgriculturePage from './pages/AgriculturePage'
import DroneSales from './pages/DroneSales'
import AgriSpraying from './pages/AgriSpraying'
import CustomSolutions from './pages/CustomSolutions'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services/drone-sales" element={<DroneSales />} />
        <Route path="/services/agri-spraying" element={<AgriSpraying />} />
        <Route path="/services/custom-solutions" element={<CustomSolutions />} />
        <Route path="/agriculture-drones" element={<AgriculturePage />} />
    </Routes>
  )
}