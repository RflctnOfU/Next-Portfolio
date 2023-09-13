import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/layout/Header";
import Navigation from "@/components/ui/Navigation";

const praktika = localFont({
  src: "./fonts/Praktika-Light.otf",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Kristofer Marshall Portfolio",
  description: "Portfolio of Kristofer Marshall, Full Stack Web Developer",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`text-xl h-screen flex max-w-[1600px] justify-center items-center ${praktika.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="h-full w-full flex flex-col items-center justify-center">
            <Header />
            <Navigation />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
