"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [language, setLanguage] = useState("English");

  const handleChange = (e, field) => {
    setCredentials({ ...credentials, [field]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", credentials, "Language:", language);

    router.push("/");
  };

  return (
    <div className={styles.bodyBg}>
      <div className={styles.loginLayout}>
        <div className={styles.loginBanner}></div>

        <div className={styles.loginPanel}>
          <div className={styles.loginCard}>
            <div className={styles.languageSelector}>
              <select
                name="language"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Select Language"
              >
                <option value="English">English</option>
                <option value="Sinhala">සිංහල</option>
                <option value="Tamil">தமிழ்</option>
              </select>
            </div>

            <div className={styles.departmentLogo}>
              <img src="/images/sri-lanka.png" alt="National Logo" />
            </div>

            <div className={styles.departmentTitles}>
              <p>Department of Animal Production and Health</p>
              <p>සත්ව නිෂ්පාදන හා සෞඛ්‍ය දෙපාර්තමේන්තුව</p>
              <p>விலங்கு உற்பத்தி மற்றும் சுகாதாரத் துறை</p>
            </div>

            <form onSubmit={handleLogin} className={styles.loginFormGroup}>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => handleChange(e, "username")}
                required
              />
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => handleChange(e, "password")}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
