import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { ContinueShopping } from './ContinueShopping';

export const CartVoucher = () => {
  const { cart } = useContext(AppContext);
  console.log(cart);
  if (cart === null) return <></>;

  if (cart.products.length === 0)
    return (
      <div className="text-2xl uppercase text-center">
        There are no products in cart
      </div>
    );

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <input
        className="w-1/3 lg:p-3 lg:m-5 bg-zinc-100 text-zinc-800"
        type="text"
        placeholder="Your Code"
      ></input>
      <button
        type="button"
        title="Apply Coupon"
        className="w-1/4 lg:m-5 border overflow-hidden border-zinc-800 lg:p-3 bg-zinc-300 text-zinc-700 hover:bg-zinc-700 hover:text-zinc-300  text-center"
      >
        Apply Coupon
      </button>

      <button
        type="button"
        title="Update Cart"
        className="lg:m-5 w-1/4 border border-zinc-800 lg:p-3  bg-zinc-700 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700  text-center"
      >
        Update Cart
      </button>
    </div>
  );
};
