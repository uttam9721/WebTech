

import React from 'react'
import Facebook from './Facebook';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Posts from './Posts';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Facebook/>} />
        <Route path='/post' element={<Posts/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
