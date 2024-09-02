import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import { Navbar } from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: "FoodLander",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        <Navbar />
        <div className="w-full h-40 bg-white">
        </div>
        
          {children}
      </body>
    </html>
  );
}
