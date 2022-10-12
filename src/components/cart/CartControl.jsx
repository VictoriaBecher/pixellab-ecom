import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartControl = ({ cart }) => {
  const { products } = cart;
  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;
    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center hover:text-zinc-900 hover:bg-zinc-300"
            title="Cart"
          >
            {cartQty}
            <AiOutlineShoppingCart size="32"></AiOutlineShoppingCart>
          </a>
        </Link>
      </li>
    </ul>
  );
};
