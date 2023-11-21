import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: "NextJs Crud",
  description: "my first next js crud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto p-3">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
