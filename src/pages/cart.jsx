import Head from 'next/head';
import { CartControl } from '../components/cart';
import { ContinueShopping } from '../components/cart/ContinueShopping';
import { Layout } from '../layouts';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useCart } from '../hooks';

const Cart = () => {
  // const cart = useCart(2);

  // if (cart === null) {
  //   return <></>;
  // }
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            {/* <CartControl cart={cart}></CartControl> */}
            <CartControl></CartControl>
          </header>
          <section className="mt-16 text-zinc-400 font-bold">
            Cart id - de modificat
          </section>
          {/* <section className="mt-16 text-zinc-400 font-bold">{cart.id}</section> */}
        </main>
      </Layout>
    </>
  );
};
export default Cart;
