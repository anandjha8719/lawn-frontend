import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/_components/Sidebar";

export default function Home() {
  return <main className={styles.main}>
    <Sidebar />
  </main>;
}
