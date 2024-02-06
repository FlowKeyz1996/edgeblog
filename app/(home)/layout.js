import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "welcome to the blog home page",
  description: "we bring you the latest and trending blog post from in and around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2 md:px-20">
        <Navbar />
        {children}
        <Footer/>
        </main>
       
        </body>
    </html>
  );
}

