// Layout is just like Index.js in react
import "./globals.css";
import { Rubik } from "next/font/google";

// Components
import Navbar from "./components/Navbar";

// Google Font
const rubik = Rubik({ subsets: ["latin"] });

// META tags in NextDotJS
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
