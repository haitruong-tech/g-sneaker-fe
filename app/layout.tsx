import type { Metadata } from "next";
import { rubik } from "@/app/ui/fonts";
import "@/app/globals.css";

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
        <div
          style={{ backgroundImage: "url(/assets/background.png)" }}
          className="fixed bottom-0 left-0 h-[50vh] w-screen origin-left animate-background bg-cover -z-10"
        />
        {children}
      </body>
    </html>
  );
}
