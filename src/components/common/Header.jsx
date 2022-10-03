import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGooglePlus } from 'react-icons/ai';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className="relative flex lg:flex-col justify-between items-center h-full z-10">
        <Link href="/">
          <a title="Home">
            <FaApple size="32"></FaApple>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <IoMdCloseCircle size="32"></IoMdCloseCircle>
          ) : (
            <CgMenu size="32"></CgMenu>
          )}
        </button>

        <ul className="flex lg:flex-col justify-between items-start">
          <li className="hover:bg-white hover:text-neutral-900 rounded-full p-2">
            <Link href="https://www.facebook.com">
              <a className="Facebook">
                <FaFacebookF size="16"></FaFacebookF>
              </a>
            </Link>
          </li>

          <li className="hover:bg-white hover:text-neutral-900 rounded-full p-2">
            <Link href="https://www.twitter.com">
              <a className="Twitter">
                <BsTwitter size="16"></BsTwitter>
              </a>
            </Link>
          </li>

          <li className="hover:bg-white hover:text-neutral-900 rounded-full p-2">
            <Link href="https://www.google.com">
              <a className="Google">
                <AiOutlineGooglePlus size="16"></AiOutlineGooglePlus>
              </a>
            </Link>
          </li>
        </ul>
      </section>

      {menuOpen ? (
        <nav
          className={`absolute ${
            menuOpen ? 'top-0' : '-top-full'
          } left-0 h-screen w-screen  text-white bg-neutral-900`}
        >
          <ul className="flex flex-col justify-center items-center uppercase h-full">
            <li className="hover:bg-white hover:text-neutral-900 rounded-full p-3">
              <Link href="/">
                <a title="Home">Home</a>
              </Link>
            </li>

            <li className="hover:bg-white hover:text-neutral-900 rounded-full p-3">
              <Link href="/about">
                <a title="About">About</a>
              </Link>
            </li>

            <li className="hover:bg-white hover:text-neutral-900 rounded-full p-3">
              <Link href="/contact">
                <a title="Contact">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
