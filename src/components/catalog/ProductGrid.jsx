import { css } from '@emotion/css';
import Link from 'next/link';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { ProductTile } from './ProductTile';

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.lenght <= 0) {
    return (
      <Link href="/">
        <div className="flex items-center justify-center hover:text-zinc-900 hover:bg-zinc-300 border ml-2 p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <MdRemoveShoppingCart size={32}></MdRemoveShoppingCart>
          <a className="uppercase font-extrabold" title="Back to Shop">
            There are no products in the Cart. Back to shop!
          </a>
        </div>
      </Link>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
