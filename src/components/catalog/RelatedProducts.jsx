import { useState, useEffect } from 'react';
import { baseUrl } from '../..';
import Image from 'next/image';
import Link from 'next/link';

export const RelatedProducts = ({ category, relatedId }) => {
  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/products/category/${category}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setRelatedProducts(result);
      });
  }, [category]);

  if (relatedProducts === null) {
    return <></>;
  }

  return (
    <div className="flex flex-row justify-between gap-2 my-6 mx-0">
      {relatedProducts.map((relatedProduct) => {
        const { title, price, image, id } = relatedProduct;
        const formattedPrice = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price);

        if (category === category && relatedId !== id) {
          return (
            <div className="basis-0 flex-1 text-center" key={id}>
              <section>
                <Link href={`/products/${id}`}>
                  <a title={title}>
                    <Image
                      alt={title}
                      src={image}
                      width={250}
                      height={250}
                      objectFit="contain"
                      className="inline -z-10"
                    ></Image>
                  </a>
                </Link>
              </section>
              <section>
                <h1 className="inline">{title}</h1>
                <div className="text-zinc-900 font-extrabold">
                  {formattedPrice}
                </div>
              </section>
            </div>
          );
        }
      })}
    </div>
  );
};
