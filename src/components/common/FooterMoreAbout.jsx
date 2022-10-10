import Link from 'next/link';

export const FooterMoreAbout = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-4 lg:grid-cols-4 items-center text-zinc-500 font-bold">
      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-xl font-extrabold text-zinc-700">
          Los Angeles
        </h2>

        <p>
          145 Oliveshka Street, <br></br>Los Angeles, LA 90003
        </p>
        <span>+44 987 065 901</span>
        <span>info@Example.com</span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-xl font-extrabold text-zinc-700">
          San Francisco
        </h2>

        <p>
          210 Pier Street, <br></br>San Francisco, CA 94111
        </p>
        <span>+44 987 065 902</span>
        <span>info@Example.com</span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="uppercase text-xl font-extrabold text-zinc-700">
          New York
        </h2>

        <p>
          711 Snow Street, <br></br>New York, NY 10014
        </p>
        <span>+44 987 065 903</span>
        <span>info@Example.com</span>
      </div>

      <div>
        <h2 className="uppercase text-xl font-extrabold text-zinc-700">
          Follow Us
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <a
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com"
            >
              Facebook
            </a>

            <a
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com"
            >
              Twitter
            </a>

            <a
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com"
            >
              Instagram
            </a>

            <a
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com"
            >
              Linkedin
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <a
              title="Dribbble"
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com"
            >
              Dribbble
            </a>

            <a
              title="Behance"
              target="_blank"
              rel="noopener noreferrer"
              href="https://behance.net"
            >
              Behance
            </a>

            <a
              title="Pinterest"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pinterest.com"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
