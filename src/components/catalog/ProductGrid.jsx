import { css } from '@emotion/css';
import Link from 'next/link';
import { MdRemoveShoppingCart } from 'react-icons/md';

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
        const { title, price, image } = product;
        const formattedPrice = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price);

        return (
          <li key={index}>
            <article className="w-full transition ease-in-out delay-250 hover:-translate-y-2 duration-300">
              <header>
                <div className="w-full h-72 text-center">
                  <Link href="/products/2">
                    <a title={title}>
                      <img
                        alt={`Image for product ${title}`}
                        src={image}
                        className="h-full inline"
                      ></img>
                    </a>
                  </Link>
                </div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zink-400 mb-2 font-bold">
                  {title}
                </h1>

                <div className="text-zinc-900 font-extrabold">
                  {formattedPrice}
                </div>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
