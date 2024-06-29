import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

        <div className="bg-red-600">
          <Navbar></Navbar>
        </div>

        <div>
          {children}
        </div>


        <footer>
          all rights reserved by 2024
        </footer>

      </body>
    </html>
  );
}
