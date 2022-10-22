export const CartVoucher = () => {
  return (
    <div>
      <input
        className="w-1/4 p-3 m-5 bg-zinc-100 text-zinc-800"
        type="text"
        placeholder="Coupon Code"
      ></input>
      <button
        type="button"
        title="Apply Coupon"
        className="w-1/5 border border-zinc-800 p-3  bg-zinc-300 text-zinc-700 hover:bg-zinc-700 hover:text-zinc-300  text-center"
      >
        Apply Coupon
      </button>

      <button
        type="button"
        title="Update Cart"
        className="ml-40 w-1/5 border border-zinc-800 p-3  bg-zinc-700 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700  text-center"
      >
        Update Cart
      </button>
    </div>
  );
};
