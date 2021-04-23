import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useSession } from "next-auth/client";
import Link from "next/link";

if (!process.env.DATABASE_URL || !process.env.NEXTAUTH_URL) {
  console.error(
    "Hi! looks like you're trying to use this code without ENVs. If you want to use this, you will need this ENVs:\n  - A mongoDB database URL\n  - A next-auth URL\n"
  );
  process?.exit?.(1);
}

export default function Home() {
  const [session] = useSession();

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
            {/*<p className={styles.description}>Open source music radio player</p>*/}
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
