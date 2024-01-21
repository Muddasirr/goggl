import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.js'

const Last = () => {
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<App />} />
</Routes>
</BrowserRouter>  )
}

export default Last