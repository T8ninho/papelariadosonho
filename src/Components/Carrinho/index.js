import * as C from '../../Style'

export default function Carrinho({ cart, removeItem }) {
    const countByProduct = cart.reduce((acc, product) => {
      acc[product.id] = (acc[product.id] || 0) + 1;
      return acc;
    }, {});
  
    const cartItems = Object.keys(countByProduct).map((productId) => {
      const product = cart.find((p) => p.id === parseInt(productId));
      return {
        ...product,
        count: countByProduct[productId]
      };
    });
  
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  
    return (
      <div>
        <h2>Carrinho:</h2>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - R$ {item.price} x {item.count}
                <C.Botao onClick={() => removeItem(item.id)}>Remover</C.Botao>
              </li>
            ))}
            <li id="total">Total : {totalPrice} $</li>
          </ul>
        )}
      </div>
    );
  }