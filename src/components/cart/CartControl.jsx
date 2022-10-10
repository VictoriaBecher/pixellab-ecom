import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center hover:text-zinc-900 hover:bg-zinc-300"
            title="Cart"
          >
            <AiOutlineShoppingCart size="32"></AiOutlineShoppingCart>
          </a>
        </Link>
      </li>
    </ul>
  );
};
