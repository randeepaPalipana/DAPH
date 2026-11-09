import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>Powered by Sri Lanka Telecom</p>
        </div>
      </div>
    </footer>
  );
}
