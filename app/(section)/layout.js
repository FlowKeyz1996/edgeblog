import { Inter } from "next/font/google";
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New blog posts",
  description: "Stay up to date with the newest blog trends ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}