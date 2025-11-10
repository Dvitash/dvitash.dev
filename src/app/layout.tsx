import "../styles/globals.css";

import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import Header from "@/components/header";
// import Sidebar from '@/components/layout/sidebar'
// import Footer from '@/components/layout/footer'

const ROBOTO_MONO = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dvitash.Dev",
  description: "Computer Scientist, Game Developer",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon-dark.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="./favicon-light.png" media="(prefers-color-scheme: light)" />

        <link rel="icon" href="./favicon-dark.svg" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="./favicon-link.svg" media="(prefers-color-scheme: light)" />
      </head>

      <body className={ROBOTO_MONO.className}>
        <Header />
        {/* <Sidebar /> */}

        <main className="flex items-center justify-center min-h-[calc(100vh-100px)]">{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
