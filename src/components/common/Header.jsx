import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { FcNightLandscape } from 'react-icons/fc';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineGooglePlus } from 'react-icons/ai';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className="relative flex lg:flex-col justify-between items-center h-full z-10 lg:py-4">
        <Link href="/">
          <a title="Home">
            <FcNightLandscape
              size="48"
              className="hover:bg-white hover:text-neutral-900 rounded-full p-2"
            ></FcNightLandscape>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          className="rounded-full"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <IoMdCloseCircle
              size="48"
              className="hover:bg-white hover:text-neutral-900 rounded-full p-2"
            ></IoMdCloseCircle>
          ) : (
            <CgMenuRound
              size="48"
              className="hover:bg-white hover:text-neutral-900 rounded-full p-2"
            ></CgMenuRound>
          )}
        </button>

        <div className="hidden lg:block">
          <ul className="flex lg:flex-col justify-between items-start">
            <li className="hover:bg-white hover:text-neutral-900 rounded-full ">
              <a
                className="Facebook display: block w-full h-full p-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com"
              >
                <FaFacebookF size="18"></FaFacebookF>
              </a>
            </li>

            <li className="hover:bg-white hover:text-neutral-900 rounded-full">
              <a
                className="Twitter display: block w-full h-full p-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com"
              >
                <BsTwitter size="18"></BsTwitter>
              </a>
            </li>

            <li className="hover:bg-white hover:text-neutral-900 rounded-full">
              <a
                className="Google display: block w-full h-full p-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com"
              >
                <AiOutlineGooglePlus size="18"></AiOutlineGooglePlus>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {menuOpen ? (
        <nav
          className={`absolute left-0 -top-full transition-transform transform-gpu ${
            menuOpen ? 'translate-y-full' : ''
          } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900 font-extrabold text-lg`}
        >
          <ul className="flex flex-col justify-center items-center uppercase h-full">
            <li className="p-3">
              <Link href="/">
                <a
                  title="Home"
                  className="hover:bg-white hover:text-neutral-900 rounded-full p-2"
                >
                  Home
                </a>
              </Link>
            </li>

            <li className="p-3">
              <Link href="/about">
                <a
                  title="About"
                  className="hover:bg-white hover:text-neutral-900 rounded-full p-2"
                >
                  About
                </a>
              </Link>
            </li>

            <li className="p-3">
              <Link href="/contact">
                <a
                  title="Contact"
                  className="hover:bg-white hover:text-neutral-900 rounded-full p-2"
                >
                  Contact
                </a>
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
