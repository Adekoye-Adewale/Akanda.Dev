import HomeHero from "@/components/hero/HomeHero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero/>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
