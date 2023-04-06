
import { useState } from 'react';
import Carrinho from '../../Components/Carrinho';
import Produtos from '../../Components/Produtos';
import * as C from '../../Style';

export default function Inicio() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <C.Container>
        <C.App>
            <Produtos addToCart={addToCart} />
            <Carrinho cart={cart} removeItem={removeItem} />
        </C.App>
    </C.Container>
  );
}

