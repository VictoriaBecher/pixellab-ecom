export const CartVoucher = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <input
        className="w-1/3 md:p-3 md:m-5 bg-zinc-100 text-zinc-800"
        type="text"
        placeholder="Your Code"
      ></input>
      <button
        type="button"
        title="Apply Coupon"
        className="w-1/4 m-1 md:m-5 border overflow-hidden border-zinc-800 md:p-3 bg-zinc-300 text-zinc-700 hover:bg-zinc-700 hover:text-zinc-300  text-center"
      >
        Apply Coupon
      </button>

      <button
        type="button"
        title="Update Cart"
        className="md:m-5 w-1/4 border border-zinc-800 md:p-3  bg-zinc-700 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-700  text-center"
      >
        Update Cart
      </button>
    </div>
  );
};
