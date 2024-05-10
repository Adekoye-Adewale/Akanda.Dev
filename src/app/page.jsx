import HomeHero from "@/components/hero/HomeHero";
import HomePage from "@/components/pages/HomePageComponents";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <HomeHero/>
      <HomePage/>
    </main>
  );
}
