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

// import { useContext } from 'react';
// import { AppContext } from '../../pages/_app';

// export const CartTotals = () => {
//   const { cart } = useContext(AppContext);
//   console.log(cart);
//   if (cart === null) return <></>;

//   if (cart.products.length === 0)
//     return <div className="text-2xl ">There are no products in cart</div>;

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

          <section className="mt-16 text-zinc-400 font-bold grid lg:grid-cols-12 gap-8">
            <div className="grid lg:col-span-8">
              <CartItems></CartItems>
              <CartVoucher></CartVoucher>
            </div>

            <aside className="d-block md:col-span-4">
              <CartTotals></CartTotals>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};
export default Cart;
