import { FooterTop } from './FooterTop';
import { IoIosArrowDropup } from 'react-icons/io';

export const Footer = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  };
  return (
    <>
      <section className="container px-4 lg:px-0 mx-auto py-8">
        <FooterTop></FooterTop>
      </section>

      <div className="border border-t border-gray-600"></div>
      <div className="relative text-center">
        <button
          type="button"
          title="back to top"
          className="relative -top-4 hover:bg-neutral-900 hover:text-gray-600 rounded-full animate-bounce"
          onClick={backToTop}
        >
          <div className="rounded-full border border-zinc-500 bg-zinc-300">
            <IoIosArrowDropup size={42}></IoIosArrowDropup>
          </div>
        </button>
      </div>

      <section className="container lg:px-0 mx-auto py-4 font-bold">
        <p className="text-center">2018 Created By Unvab</p>
      </section>
    </>
  );
};
