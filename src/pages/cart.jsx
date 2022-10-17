import Head from 'next/head';
import {
  CartControl,
  CartItems,
  CartTotals,
  CartVoucher,
} from '../components/cart';
import { ContinueShopping } from '../components/cart/ContinueShopping';
import { Layout } from '../layouts';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useCart } from '../hooks';

const Cart = () => {
  const cart = useCart(2);

  if (cart === null) {
    return <></>;
  }

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

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16 text-zinc-400 font-bold grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <CartItems></CartItems>
              <CartVoucher></CartVoucher>
            </div>

            <aside className="col-span-4">
              <CartTotals></CartTotals>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};
export default Cart;
