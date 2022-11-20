import { Route, Routes } from 'react-router';
import { useAppDispatch } from './redux/hooks/hooks';
import { useEffect } from "react"
import {fetchProducts} from './redux/operations/operations'

import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { Header } from './components/common/header';
import { Product } from './pages/product';

const App: React.FC = () => {
  const dispatch = useAppDispatch()

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
