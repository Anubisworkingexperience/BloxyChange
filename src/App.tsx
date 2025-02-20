import { Header } from './components/Header'
import { WorkArea } from './components/WorkArea'
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <WorkArea />
      </BrowserRouter>
    </>
  )
}

export default App
