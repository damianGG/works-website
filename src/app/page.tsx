import Image from "next/image";
import styles from "./page.module.css";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
import Hero4 from "@/components/blocks/hero/Hero4";
import About6 from "@/components/blocks/about/About6";

export default function Home() {
  return (
    <main >
      <div className="mt-10">
        <Hero4 />
        <About6 />
      </div>
    </main>
  );
}
