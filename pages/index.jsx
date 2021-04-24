/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useSession } from "next-auth/client";
import Link from "next/link";

export default function Home() {
  const [session] = useSession() || null;

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
