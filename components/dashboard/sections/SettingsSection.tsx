// "use client";

// import Image from "next/image";
// import styles from "./SettingsSection.module.css";

// export default function SettingsSection() {
//   return (
//     <section className={styles.page}>
//       {/* Page header */}
//       <header className={styles.header}>
//         <h1 className={styles.title}>Settings</h1>
//         <p className={styles.subtitle}>Manage your account and preferences.</p>
//       </header>

//       {/* Main card */}
//       <div className={styles.card}>
//         {/* 3D illustration — save Image 1 to /public/settings-illustration.png */}
//         <div className={styles.illustration}>
//           <Image
//             src="/settings-illustration.png"
//             alt="Settings under construction"
//             width={360}
//             height={280}
//             priority
//             className={styles.illustrationImg}
//           />
//         </div>

//         <h2 className={styles.heading}>
//           Settings is{" "}
//           <span className={styles.highlight}>under construction!</span>
//         </h2>

//         <p className={styles.body}>
//           We&apos;re building something amazing for you.
//           <br />
//           In the meantime, you can manage your account settings
//           <br />
//           or adjust your notification preferences.
//         </p>

//         {/* Divider dot */}
//         <div className={styles.dividerWrap} aria-hidden="true">
//           <span className={styles.dividerDot} />
//         </div>

//         {/* Info banner */}
//         <div className={styles.infoBanner}>
//           <div className={styles.infoIcon}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="12" cy="12" r="10" />
//               <line x1="12" y1="8" x2="12" y2="12" />
//               <line x1="12" y1="16" x2="12.01" y2="16" />
//             </svg>
//           </div>
//           <p className={styles.infoText}>
//             Thank you for your patience! We&apos;ll have this section ready soon.
//           </p>
//           <div className={styles.heartIcon} aria-hidden="true">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1.5">
//               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./SettingsSection.module.css";
import { useState } from "react";

export default function SettingsSection() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <section className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className={styles.layout}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <motion.div className={styles.card}>
            <h2>Preferences</h2>

            {/* Setting Item */}
            <div className={styles.item}>
              <div>
                <h4>Email Notifications</h4>
                <span>Receive updates and alerts</span>
              </div>
              <div
                className={`${styles.toggle} ${
                  emailNotif ? styles.active : ""
                }`}
                onClick={() => setEmailNotif(!emailNotif)}
              />
            </div>

            <div className={styles.item}>
              <div>
                <h4>Dark Mode</h4>
                <span>Enable dark UI theme</span>
              </div>
              <div
                className={`${styles.toggle} ${
                  darkMode ? styles.active : ""
                }`}
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>

            <div className={styles.item}>
              <div>
                <h4>Auto Interview Mode</h4>
                <span>AI generates interviews automatically</span>
              </div>
              <span className={styles.badge}>Coming Soon</span>
            </div>
          </motion.div>

          {/* Security Card */}
          <motion.div className={styles.card}>
            <h2>Security</h2>

            <div className={styles.item}>
              <div>
                <h4>Password</h4>
                <span>Last updated 2 weeks ago</span>
              </div>
              <button className={styles.btn}>Update</button>
            </div>

            <div className={styles.item}>
              <div>
                <h4>2FA Authentication</h4>
                <span>Extra layer of security</span>
              </div>
              <button className={styles.btn}>Enable</button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={styles.profileCard}>
            <Image
              src="/settings-illustration.png"
              width={260}
              height={200}
              alt="settings"
            />

            <h3>Smart AI Settings</h3>
            <p>
              Personalize your AI interviewer, difficulty level, and feedback
              style.
            </p>

            <button className={styles.primaryBtn}>
              Explore Advanced Settings
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}