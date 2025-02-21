import { BrowserRouter, Routes, Route } from 'react-router';
import About from './pages/About';
import BloxyApp from './pages/BloxyApp';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<BloxyApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
