import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "OLMAT UINSA",
  description: "Olimpiade Matematika UINSA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
