import './App.css'
import {Routes, Route} from 'react-router-dom'

import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Catalogpage from './pages/Catalogpage'
import Aboutpage from './pages/Aboutpage'
import Historypage from './pages/Historypage'
import Cartpage from './pages/Cartpage'
import Productpage from './pages/Productpage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Homepage />}/>
          <Route path='catalog' element={<Catalogpage />}/>
          <Route path='about' element={<Aboutpage />}/>
          <Route path='history' element={<Historypage />}/>
          <Route path='cart' element={<Cartpage />}/>
          <Route path='catalog/product' element={<Productpage />}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
