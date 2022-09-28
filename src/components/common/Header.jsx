import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section className="relative flex justify-between items-center h-full z-10">
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
          <CgMenu size="32"></CgMenu>
        </button>
      </section>

      {menuOpen ? (
        <nav
          className={`absolute ${
            menuOpen ? 'top-0' : '-top-full'
          } left-0 h-screen w-screen  text-white bg-neutral-900`}
        >
          <ul>
            <li>
              <Link href="/">
                <a title="Home">Home</a>
              </Link>
            </li>

            <li>
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
