import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartTotals = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <header className="text-zinc-800 bg-zinc-300 font-extrabold uppercase border-b mb-6 p-2">
        <h1>Cart Totals</h1>
      </header>

      <section>
        <ul className="pl-3">
          <li className="flex border-b text-zinc-800 pb-4">
            Sub total: {'\u00A0'}
            <span> $ 2578.70</span>
          </li>

          <li className="mt-6 border-b pb-4">
            <span className="text-zinc-800">Shipping:</span>
            <form className="flex flex-col justify-center">
              <div className="flex gap-3 pl-20">
                <input type="checkbox" name="standard" id="standard" checked />
                <label htmlFor="standard">Standard (free)</label>
              </div>

              <div className="flex gap-3 pl-20">
                <input type="checkbox" name="express" id="express" />
                <label htmlFor="express">Express ($49.00)</label>
              </div>
            </form>
          </li>

          <li className="text-zinc-800 mt-6 font-extrabold">
            Total: {'\u00A0'} <span className="text-xl"> $ 2578.70 </span>
          </li>
        </ul>

        <button
          type="submit"
          title="Proceed to Checkout"
          className="uppercase flex bg-zinc-700 w-full  text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700  justify-center py-3 mt-5"
        >
          Proceed to Checkout
        </button>
      </section>

      <footer></footer>
    </>
  );
};
