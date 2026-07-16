type StoryFieldIconProps = {
  name: string;
};

/** Bowl of Hygieia — classic pharmacy symbol (snake + cup). */
function PharmacySymbolIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Cup / bowl */}
      <path d="M8 9.5h8v1.2c0 2.4-1.8 4.3-4 4.3s-4-1.9-4-4.3V9.5Z" />
      <path d="M8 9.5c0-1.4 1.8-2.5 4-2.5s4 1.1 4 2.5" />
      {/* Stem */}
      <path d="M12 15v5.5" />
      <path d="M9.5 20.5h5" />
      {/* Snake */}
      <path d="M14.2 7.2c1.6-.9 3.2-.4 3.6 1.1.4 1.4-.6 2.4-1.8 2.8-1.4.5-2.2 1.4-2.1 2.6.1 1.4 1.4 2.1 2.8 1.7" />
      <path d="M16.8 7.4c.2-.55.7-.9 1.25-.85" />
    </svg>
  );
}

export function StoryFieldIcon({ name }: StoryFieldIconProps) {
  if (name === "svg:pharmacy-symbol") {
    return <PharmacySymbolIcon />;
  }

  return <i className={name} />;
}
