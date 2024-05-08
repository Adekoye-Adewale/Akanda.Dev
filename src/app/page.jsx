import HomeHero from "@/components/hero/HomeHero";
import styles from "./page.module.css";
import Tab from "@/components/tab";

export default function Home() {

  return (
    <main className={styles.main}>
      <HomeHero/>
      <section></section>
      <section>
        <Tab/>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
