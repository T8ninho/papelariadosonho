import * as C from '../../Style'

export default function Produtos({ addToCart }) {
    const products = [
      { id: 1, name: "Camisa", price: 20 },
      { id: 2, name: "Calça", price: 40 },
      { id: 3, name: "Sapatos", price: 50 }
    ];
  
    return (
      <div>
        <h2>produtos :</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
              <C.Botao onClick={() => addToCart(product)}>Adicionar</C.Botao>
            </li>
          ))}
        </ul>
      </div>
    );
  }