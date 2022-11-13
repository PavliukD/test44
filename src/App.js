import React from 'react';
import { Route, Routes } from 'react-router';
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {fetchProducts} from './redux/operations/operations'

import { Shop } from './pages/store';
import { Cart } from './pages/cart';
import { Header } from './components/common/header';
import { Product } from './pages/product';

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
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product/> } />
      </Routes>
    </>
  );
}

export default App;
