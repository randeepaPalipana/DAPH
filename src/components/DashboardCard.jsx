// src/components/DashboardCard.jsx
import Link from "next/link";
import styles from "./DashboardCard.module.css";

export default function DashboardCard({ title, icon, route }) {
  return (
    <Link href={route} className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
    </Link>
  );
}
