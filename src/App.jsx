import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import ResourcePage from './Routes/ResourcePage';
import AiTutor from './Routes/AiTutor';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources/:type" element={<ResourcePage />} />
        <Route path="/ai-tutor" element={<AiTutor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
