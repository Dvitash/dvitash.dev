import "../styles/globals.css";

import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

const ROBOTO_MONO = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Daniel Vitashkevich | Software Engineer",
  description: "I build trading systems, developer tools, and games.",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ROBOTO_MONO.variable}>
      <body className="font-body bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1 content-container">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
