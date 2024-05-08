import HomeHero from "@/components/hero/HomeHero";
import styles from "./page.module.css";
import Tab from "@/components/tab";
import HomePage from "@/components/HomePageComponents";

export default function Home() {

  return (
    <main className={styles.main}>
      <HomeHero/>
      <section></section>
      <HomePage/>
      <section></section>
      <section></section>
    </main>
  );
}
