function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-row space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 ">
        <li className="hidden">
          <a
              className="flex items-center transition-all hover:text-neutral-800 "
              rel="noopener noreferrer"
              target="_blank"
              href="https://scholar.google.co.uk/citations?hl=en&user=yiDfH4UAAAAJ"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">source</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://blogs.blenton.io"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">blogs</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/bentondecusin/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/bentondecusin/blenton.io"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">source</p>
          </a>
        </li>

      </ul>
    </footer>
  );
}
