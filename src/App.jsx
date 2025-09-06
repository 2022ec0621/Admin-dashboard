import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"  
import Home from './pages/Home/Home'   
import List from './pages/List/List'   
import New from './pages/New/New'   
import Single from './pages/Single/Single'   
import Login from './pages/Login/Login'   


const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route   path='/' >
        <Route index element={<Home/>}/>
        <Route exact path='login' element={<Login/>}/>
        <Route exact path='users'>
          <Route index element={<List/>}/>
          <Route exact path=':userId' element={<Single/>}/>
          <Route exact path='new' element={<New/>}/>
        </Route>
        <Route exact path='products'>
          <Route index element={<List/>}/>
          <Route exact path=':productId' element={<Single/>}/>
          <Route exact path='new' element={<New/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
) 

export default App
