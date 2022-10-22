import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItem } from './CartLineItem';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  if (products.length <= 0) {
    return <></>;
  }
  return (
    <table className="flex justify-center items-center flex-col w-full">
      <thead className="w-full border-b">
        <tr className="flex w-full mb-4 uppercase">
          <th className="w-3/6">Product</th>
          <th className="w-1/3 pl-20">Price</th>
          <th className="w-1/3">Quantity</th>
          <th className="w-1/3 pr-20">Total</th>
        </tr>
      </thead>

      <tbody className="w-full flex flex-col gap-5 items-center justify-center">
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
