import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useSession } from "next-auth/client";
import Link from "next/link";

export default function Home() {
  console.log("Preview mode: ", process.env.IS_PREVIEW_SETUP || "No");

  if (process.env.IS_PREVIEW_SETUP === "yes")
    <meta http-equiv="refresh" content="2;url=/preview-github" />;

  const [session] = useSession();

  if (!process.env.DATABASE_URL || !process.env.NEXTAUTH_URL) {
    console.error(
      "Hi! looks like you're trying to use this code without ENVs. If you want to use this, you will need this ENVs:\n  - A mongoDB database URL\n  - A next-auth URL\n"
    );
  }

  return (
    <>
      <div>
        <div className={styles.container}>
          <Head>
            <title>TakoYaki Radio</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>Welcome to TakoYaki Radio!</h1>
            <div className={styles.grid}>
              {!session && (
                <>
                  <Link href="/" className={styles.card}>
                    <div className={styles.card}>
                      <h3>Sign in &rarr;</h3>
                    </div>
                  </Link>
                  <Link href="/" className={styles.card}>
                    <div className={styles.card}>
                      <h3>Sign up &rarr;</h3>
                    </div>
                  </Link>
                </>
              )}

              {session && (
                <Link href="/" className={styles.card}>
                  <h3>Sign out &rarr;</h3>
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
