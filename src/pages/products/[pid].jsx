// /products/2 /products/5 /products/21

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../../layouts';
import { CartControl, ContinueShopping } from '../../components/cart';
import { BiLoaderCircle } from 'react-icons/bi';

import {
  RelatedProducts,
  ProductReview,
  ProductNotFound,
  AddToCart,
} from '../../components/catalog';
import { useProduct } from '../../hooks';
import Image from 'next/image';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== '404') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle className="animate-spin" size="48"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return <ProductNotFound></ProductNotFound>;
  }

  const { id, title, description, price, image, rating, category } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container px-4 lg:px-0 mx-auto flex justify-between">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>
            <div>
              <CartControl></CartControl>
            </div>
          </header>
          <section className="container mt-16 px-4 lg:px-0 mx-auto grid gap-8 grid-cols-12 mb-6">
            <div className="col-start-1 col-span-5">
              <Image
                alt={`Image of ${title}`}
                className="inline -z-10 w-full"
                src={image}
                width={600}
                height={600}
                objectFit="contain"
              ></Image>
            </div>

            <header className="col-start-7 col-span-6 pt-12">
              <h1 className="text-2xl uppercase font-bold">{title}</h1>
              <ProductReview
                stars={rating.rate}
                count={rating.count}
              ></ProductReview>
              <p className="mt-12">{description}</p>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12"></div>
            </header>
          </section>
          <section className="border-t">
            <AddToCart product={product}></AddToCart>
          </section>
          <section className="container px-4 lg:px-0 mx-auto">
            <h1 className="uppercase text-center my-3">Related products</h1>
            <RelatedProducts
              category={category}
              relatedId={id}
            ></RelatedProducts>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
