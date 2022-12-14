import Link from 'next/link';
import Image from 'next/image';
import { AddToCart } from './AddToCart';
import { RemoveFromCart } from './RemoveFromCart';

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <article className="w-full">
      <header>
        <div className="w-full text-center">
          <Link href={`/products/${id}`}>
            <a title={title}>
              <Image
                alt={title}
                src={image}
                width={200}
                height={200}
                objectFit="contain"
                className="inline -z-10"
              ></Image>
            </a>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm">
        <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

        <div className="text-zinc-900 font-bold">{formattedPrice}</div>

        <div className="flex justify-center my-5">
          <AddToCart product={product}></AddToCart>
          <RemoveFromCart product={product}></RemoveFromCart>
        </div>
      </section>
    </article>
  );
};
