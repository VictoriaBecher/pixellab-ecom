// const Products = () => {
//   return <div>products</div>;
// };

// export default Products;

import Head from 'next/head';
import { useState } from 'react';
import { CartControl } from '../components/cart';
import { GridControls, Pagination, ProductGrid } from '../components/catalog';
import { useCart, useProducts } from '../hooks';
import { Layout } from '../layouts';

const Products = () => {
  const [perRow, setPerRow] = useState(4);
  const { products } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const cart = useCart(2);

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>

      <Layout>
        <main className="container px-4 md:px-0 mx-auto">
          <header className="flex justify-end text-zinc-700">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="my-16">
            <ProductGrid
              products={paginatedProducts}
              perRow={perRow}
            ></ProductGrid>
          </section>

          <section>
            <Pagination
              products={products}
              setPaginatedProducts={setPaginatedProducts}
            ></Pagination>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Products;
