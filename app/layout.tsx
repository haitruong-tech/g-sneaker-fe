import type { Metadata } from "next";
import { rubik } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "G-Sneaker",
  description: "JS developer intern assignment at Golden Owl",
  authors: [{ name: "Hai Truong", url: "https://haitruongdev.com/" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <body>{children}</body>
    </html>
  );
}
