import type { Metadata } from "next";
import { rubik } from "@/app/ui/fonts";
import "@/app/globals.css"
import Image from "next/image";

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
      <body>
        {children}
        <Image
          src="/assets/background.png"
          width={1800}
          height={1200}
          alt=""
          className="fixed bottom-0 left-0 h-[50%] origin-left animate-background"
        />
      </body>
    </html>
  );
}
