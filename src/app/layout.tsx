import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { NavbarProvider } from "./components/navbarContext";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Heeges Care Website",
  description: "Simplify Care Management for a Better Tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <NavbarProvider>
          <Navbar />
          <main>{children}</main>
        </NavbarProvider>
      </body>
    </html>
  );
}
