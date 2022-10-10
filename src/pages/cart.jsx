import Head from 'next/head';
import { CartControl } from '../components/cart';
import { ContinueShopping } from '../components/cart/ContinueShopping';
import { Layout } from '../layouts';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Link from 'next/link';

const Cart = () => {
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

            <CartControl></CartControl>
          </header>

          <section className="mt-16 text-zinc-400 font-bold">
            cart goes here
          </section>
        </main>
      </Layout>
    </>
  );
};
export default Cart;
