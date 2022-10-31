import Link from 'next/link';
import { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;
    cartQty += quantity;
    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li className="relative">
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center hover:text-zinc-900 hover:bg-zinc-300"
            title="Cart"
          >
            <span className="absolute top-5 right-5 bg-zinc-200 text-zinc-800 p-1 rounded-full text-sm font-extrabold">
              {cartQty}
            </span>
            <AiOutlineShoppingCart size="32"></AiOutlineShoppingCart>
          </a>
        </Link>
      </li>
    </ul>
  );
};
