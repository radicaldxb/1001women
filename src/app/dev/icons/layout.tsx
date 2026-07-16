import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uicons browser",
  robots: { index: false, follow: false },
};

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
