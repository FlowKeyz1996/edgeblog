import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New blog posts",
  description: "Stay up to date with the newest blog trends ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2 md:px-20">
        <Navbar/>
        {children}
        <Footer/>
        </main>
        </body>
    </html>
  );
}