import { useContext } from 'react';
import { baseUrl } from '../..';
import { AppContext } from '../../pages/_app';

export const AddToCart = ({ product }) => {
  const { cart, alterProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId } = cart;
  const { id: productId, title } = product;
  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId);
      });
  };

  return (
    <button
      className="bg-black text-white uppercasefont-medium text-sm py-3 px-6  hover:text-zinc-900 hover:bg-zinc-300 transition-colors"
      title={`Add ${title} to cart`}
      type="button"
      onClick={onClick}
    >
      Add to Cart
    </button>
  );
};
