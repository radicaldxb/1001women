import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Svg({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function BookIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "stories":
      return (
        <Svg className={className}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16.5H6.5A2.5 2.5 0 0 0 4 22" {...stroke} />
          <path d="M4 5.5V22" {...stroke} />
          <path d="M8 8h8M8 12h6" {...stroke} />
        </Svg>
      );
    case "maps":
      return (
        <Svg className={className}>
          <path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5 9 4.5Z" {...stroke} />
          <path d="M9 4.5v13M15 6.5v13" {...stroke} />
        </Svg>
      );
    case "profiles":
      return (
        <Svg className={className}>
          <circle cx="9" cy="8" r="2.5" {...stroke} />
          <path d="M4.5 18c.4-2.6 2.2-4 4.5-4s4.1 1.4 4.5 4" {...stroke} />
          <circle cx="16.5" cy="8.5" r="2" {...stroke} />
          <path d="M15 14.2c1.7.3 3 1.4 3.4 3.3" {...stroke} />
        </Svg>
      );
    case "discussion":
      return (
        <Svg className={className}>
          <path
            d="M5 6.5h9.5A2.5 2.5 0 0 1 17 9v4.5a2.5 2.5 0 0 1-2.5 2.5H9l-3.5 2.5V16.5H5A2.5 2.5 0 0 1 2.5 14V9A2.5 2.5 0 0 1 5 6.5Z"
            {...stroke}
          />
          <path d="M17 9.5h1.5A2.5 2.5 0 0 1 21 12v4a2.5 2.5 0 0 1-2.5 2.5H18l-2 1.8" {...stroke} />
        </Svg>
      );
    case "glossary":
      return (
        <Svg className={className}>
          <path d="M7 4h8.5A2.5 2.5 0 0 1 18 6.5V20H9.5A2.5 2.5 0 0 0 7 22.5" {...stroke} />
          <path d="M7 4v18.5" {...stroke} />
          <path d="M11 9.5h4M11 13h3" {...stroke} />
        </Svg>
      );
    case "activities":
      return (
        <Svg className={className}>
          <path d="M14.5 4.5 19 9l-9.5 9.5H5v-4.5L14.5 4.5Z" {...stroke} />
          <path d="M12.5 6.5 17 11" {...stroke} />
        </Svg>
      );
    case "one-copy":
      return (
        <Svg className={className}>
          <path d="M7 5h8.5A2.5 2.5 0 0 1 18 7.5V20H9.5A2.5 2.5 0 0 0 7 22.5" {...stroke} />
          <path d="M7 5v17.5" {...stroke} />
        </Svg>
      );
    case "gift-pack":
      return (
        <Svg className={className}>
          <path d="M4.5 11h15v9.5h-15V11Z" {...stroke} />
          <path d="M3.5 7.5h17V11h-17V7.5Z" {...stroke} />
          <path d="M12 7.5v13" {...stroke} />
          <path d="M12 7.5c-1.8-2.8-4.5-2.2-4.5-.4S9.8 9.5 12 7.5c2.2 2 4.5.8 4.5-.4s-2.7-2.4-4.5.4Z" {...stroke} />
        </Svg>
      );
    case "school-pack":
      return (
        <Svg className={className}>
          <path d="M3.5 10 12 5.5 20.5 10 12 14.5 3.5 10Z" {...stroke} />
          <path d="M7 12v5.5c2.2 1.5 5.8 1.5 8 0V12" {...stroke} />
          <path d="M20.5 10v6" {...stroke} />
        </Svg>
      );
    case "sponsor-copies":
      return (
        <Svg className={className}>
          <path
            d="M12 19.5s-6.5-4-6.5-9A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 6.5 2.5c0 5-6.5 9-6.5 9Z"
            {...stroke}
          />
        </Svg>
      );
    case "exhibition":
      return (
        <Svg className={className}>
          <path d="M4 19.5h16" {...stroke} />
          <path d="M6.5 19.5V9.5L12 5.5l5.5 4v10" {...stroke} />
          <path d="M9.5 19.5v-5h5v5" {...stroke} />
          <path d="M9.5 12h5" {...stroke} />
        </Svg>
      );
    case "creator":
      return (
        <Svg className={className}>
          <path d="M5 7.5h14v9H5v-9Z" {...stroke} />
          <path d="M9.5 11.5v3.5l4-1.75-4-1.75Z" {...stroke} />
          <path d="M8 7.5 10 4.5h4L16 7.5" {...stroke} />
        </Svg>
      );
    default:
      return (
        <Svg className={className}>
          <circle cx="12" cy="12" r="7.5" {...stroke} />
        </Svg>
      );
  }
}
