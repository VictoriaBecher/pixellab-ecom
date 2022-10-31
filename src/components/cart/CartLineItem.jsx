import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useProduct } from '../../hooks';
import { AppContext } from '../../pages/_app';
import { ProductReview } from '../catalog';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { image, price, id, title, rating } = cartItem;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  const formattedPriceOneProduct = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <tr className="flex justify-between items-center w-full border-b p-2">
      <td className="flex  w-3/6">
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              alt={title}
              src={image}
              width="100"
              height="100"
              objectFit="contain"
              className="inline -z-10"
            ></Image>
          </a>
        </Link>

        <div>
          <Link href={`/products/${id}`}>
            <a title="title" className="w-2/4 text-sm md:text-base">
              {title}
            </a>
          </Link>
          <ProductReview
            stars={rating.rate}
            count={rating.count}
          ></ProductReview>
        </div>
      </td>
      <td className="w-1/6 text-sm md:text-base">{formattedPriceOneProduct}</td>
      <td className="w-1/6 px-5 md:p-0 text-sm md:text-base md: text-center">
        <div className="border">
          <button
            type="button"
            title="Decrease"
            className="p-4"
            onClick={() => {
              alterProduct(id, -1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            type="button"
            title="Increase"
            className="p-4"
            onClick={() => {
              alterProduct(id, 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="w-1/6 text-sm md:text-base">{formattedPrice}</td>
    </tr>
  );
};
