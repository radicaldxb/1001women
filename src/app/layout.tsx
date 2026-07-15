import type { Metadata } from "next";
import { Libre_Baskerville, Quicksand } from "next/font/google";
import "./globals.css";

const sans = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "1001 Women – The Forgotten Legacy of Muslim Civilisation",
  description:
    "Join the movement rediscovering overlooked women of science, medicine, scholarship, arts, leadership and public life from Muslim civilisation.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "1001 Women",
    description:
      "The Forgotten Legacy of Muslim Civilisation — Join the Movement",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
