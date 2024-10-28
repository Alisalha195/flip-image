import { useState } from 'react';
import {useNavigate ,Navigate, Routes , Route} from 'react-router-dom'
import Game from './pages/Game';
import Start from './pages/Start';
import './App.css' 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  )
}
export default App
