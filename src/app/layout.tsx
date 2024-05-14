import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// Bootstrap and custom scss
import "@/assets/scss/style.scss";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
import Toplogo from "@/components/blocks/navbar/top-logo/Toplogo";
import Footer2 from "@/components/blocks/footer/Footer2";
import Link from "next/link";



const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projekt Kobieta-Aktywność-Sukces",
  description: "Projekt Kobieta - Aktywność - Sukces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={manrope.className}>
        <NavbarOne button={<Link title="Contact" href="/rekrutacja" className="btn btn-sm btn-primary rounded-pill">Zapisz się</Link>} />
        <div>{children}</div>
        <Footer2 />
      </body>
    </html>
  );
}
