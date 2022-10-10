import Link from 'next/link';

export const FooterTop = () => {
  return (
    <div
      className="grid grid-cols-2 gap-4 my-4 lg:grid-cols-4 items-center text-zinc-500"
      style={{ fontFamily: 'work-sans' }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-xl font-bold text-zinc-700">
          Los Angeles
        </h2>

        <p>
          145 Oliveshka Street, <br></br>Los Angeles, LA 90003
        </p>
        <span>+44 987 065 901</span>
        <span>info@Example.com</span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-xl font-bold text-zinc-700">
          San Francisco
        </h2>

        <p>
          210 Pier Street, <br></br>San Francisco, CA 94111
        </p>
        <span>+44 987 065 902</span>
        <span>info@Example.com</span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-xl font-bold text-zinc-700">New York</h2>

        <p>
          711 Snow Street, <br></br>New York, NY 10014
        </p>
        <span>+44 987 065 903</span>
        <span>info@Example.com</span>
      </div>

      <div>
        <h2 className="uppercase text-xl font-bold text-zinc-700">Follow Us</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <Link href="https://facebook.com">
              <a title="Facebook" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Link>

            <Link href="https://twitter.com">
              <a title="Twitter" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Link>

            <Link href="https://instagram.com">
              <a title="Instagram" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Link>

            <Link href="https://linkedin.com">
              <a title="Linkedin" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="https://dribbble.com">
              <a title="Dribbble" target="_blank" rel="noopener noreferrer">
                Dribbble
              </a>
            </Link>

            <Link href="https://behance.net">
              <a title="Behance" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
            </Link>

            <Link href="https://pinterest.com">
              <a title="Pinterest" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
