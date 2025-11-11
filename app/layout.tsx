import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400','500','600','700'], subsets: ['latin'], variable: '--font-poppins' });

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white dark:bg-brand">
        <Navbar />
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
}
