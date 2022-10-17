import Head from 'next/head';
import { useEffect, useState } from 'react';
// import { baseUrl } from '..';
import { CartControl } from '../components/cart';
import { GridControls, Pagination, ProductGrid } from '../components/catalog';
import { useProducts } from '../hooks';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);
  const [products] = useProducts();

  const [paginatedProducts, setPaginatedProducts] = useState([]);
  // const cart = useCart(2);

  // fara dependinte in array [] effectul ruleaza la
  // prima executie a functiei (ex Home)
  // daca nu are array ruleaza de fiecare data cand functia e executata (nu e recomandat)

  // fetch('https://swapi.dev/api/films')
  //   .then((response) => {
  //     // response.json -> promise
  //     return response.json();
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // (async () => {
  //   const response = await fetch('https://swapi.dev/api/films');
  //   const result = await response.json();
  //   console.log(result);
  // })();

  // useEffect(() => {
  //   fetch(`${baseUrl}/products?limit`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setProducts(result);
  //       // console.log(result);
  //       // never mutate state
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-end text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            {/* <CartControl cart={cart}></CartControl> */}
            <CartControl></CartControl>
          </header>

          <section className="mt-16">
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

export default Home;
