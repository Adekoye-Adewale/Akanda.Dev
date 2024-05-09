import HomeHero from "@/components/hero/HomeHero";
import styles from "./page.module.css";
import Tab from "@/components/tab";
import HomePage from "@/components/pages/HomePageComponents";

export default function Home() {

  return (
    <main className={styles.main}>
      <HomeHero/>
      <section></section>
      <HomePage/>
    </main>
  );
}
