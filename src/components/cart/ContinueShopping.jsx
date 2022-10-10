import Link from 'next/link';
import { VscDebugReverseContinue } from 'react-icons/vsc';

export const ContinueShopping = () => {
  return (
    <div className="flex items-center justify-between hover:text-zinc-900 hover:bg-zinc-300 border ml-2 p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-x-2">
      <VscDebugReverseContinue size={32}></VscDebugReverseContinue>
      <a className="uppercase font-extrabold" title="Back to Shop" href="/">
        Back to Shop
      </a>
    </div>
  );
};
