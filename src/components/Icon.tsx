export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    diagonal: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    down: (
      <>
        <path d="M12 4v16M5 13l7 7 7-7" />
      </>
    ),
    moon: <path d="M20.5 13A9 9 0 0 1 11 3.5 9 9 0 1 0 20.5 13Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
      </>
    ),
    github: (
      <>
        <path d="M9 20c-5 1-5-3-7-3m14 5v-4a4 4 0 0 0-1-3c4-.4 6-2 6-6a5 5 0 0 0-1-3c.3-1 .3-2-.2-3-2 0-3 1-4 1a13 13 0 0 0-7 0C7 3 6 2 4 3c-.5 1-.5 2 0 3a5 5 0 0 0-1 3c0 4 2 5.6 6 6a4 4 0 0 0-1 3v4" />
      </>
    ),
    shuffle: (
      <>
        <path d="m17 3 4 4-4 4M3 17h3c5 0 6-10 11-10h4M17 13l4 4-4 4M3 7h3c2 0 3 1 4 3m4 4c1 2 2 3 4 3h3" />
      </>
    ),
    spark: <path d="m12 1 2.5 7.5L22 6l-4 6 5 5-8-1-3 7-2.5-7.5L2 18l4-6-5-5 8 1Z" />,
    award: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="m8 14-2 8 6-3 6 3-2-8m-6-5 1.3 1.3L15 7" />
      </>
    ),
    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8" cy="8" r="1.5" />
        <path d="m3 17 6-5 4 3 3-4 5 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.code}
    </svg>
  );
}
