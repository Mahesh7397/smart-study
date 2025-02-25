import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import ResourcePage from './Routes/ResourcePage';
import AiTutor from './Routes/AiTutor';
import GradCalculator from './Routes/GradCalculator';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources/:type" element={<ResourcePage />} />
        <Route path="/ai-tutor" element={<AiTutor />} />
        <Route path="/gradcalculator" element={<GradCalculator/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
