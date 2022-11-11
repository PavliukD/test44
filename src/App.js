import React from 'react';
import { Route, Routes } from 'react-router';
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {fetchProducts} from './redux/operations/operations'

import { Shop } from './pages/store';
import { Cart } from './pages/cart';
import { Header } from './components/header';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  })

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
