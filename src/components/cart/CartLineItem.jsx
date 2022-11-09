import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useProduct } from '../../hooks';
import { AppContext } from '../../pages/_app';
import { ProductReview } from '../catalog';
import { BsTrashFill } from 'react-icons/bs';
import { baseUrl } from '../..';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { cart, alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { id: cartId, products } = cart;
  const { image, price, id, title, rating } = cartItem;

  let quantityIsOne = false;
  for (let i = 0; i < products.length; i++) {
    if (quantity === 1) {
      quantityIsOne = true;
    }
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  const formattedPriceOneProduct = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId, -quantity);
      });
  };

  return (
    <tr className="flex justify-between items-center w-full border-b p-2">
      <td>
        <button
          type="button"
          title="Remove from cart"
          className="p-2 text-black hover:border hover:bg-zinc-600 hover:text-white text-sm"
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you wish to delete product: ${title} from cart?`,
            );

            if (confirmDelete) alterProduct(id, -quantity);
            else return;
          }}
        >
          X
        </button>
      </td>
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

        <div className="ml-2">
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
        <div className="border flex flex-col lg:flex-row items-center justify-center">
          {quantityIsOne ? (
            <button title="remove from cart" type="button" onClick={onClick}>
              <BsTrashFill
                size={28}
                className="mx-5  hover:bg-zinc-600 hover:text-white p-1"
              ></BsTrashFill>
            </button>
          ) : (
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
          )}

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
      <td className="w-1/6 text-sm md:text-base ml-2">{formattedPrice}</td>
    </tr>
  );
};
