import "../styles/globals.css";

import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ROBOTO_MONO = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dvitash.Dev",
  description: "Computer Scientist, Game Developer",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./dvi_logo_light.svg" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="./dvi_logo_dark.svg" media="(prefers-color-scheme: light)" />
      </head>

      <body className={ROBOTO_MONO.className}>
        <Header />
        <Sidebar />

        <main className="flex items-center justify-center min-h-[calc(100vh-100px)]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
