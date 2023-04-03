import './App.css';
import Cart from '../src/components/Cart';
import NavBar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemsListContainer from './components/ItemsListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemsListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemsListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
