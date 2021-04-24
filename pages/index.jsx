/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Head from "next/head";
import styles from "../styles/Home.module.css";

//import { signOut, useSession } from "next-auth/client";
//import Link from "next/link";

import NavBar from "../components/NavBar";

export default function Home() {
  //const [session] = useSession() || null;

  return (
    <div>
      <Head>
        <title>Folkip chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Welcome to TakoYaki Radio!</h1>
          </div>
          {/*<div className={styles.grid}>
            {!session && (
              <>
                <div style={{ textAlign: "center" }}>
                  <a href="/signIn">
                    <h1 className={styles.card}>Sign in</h1>
                  </a>
                  <a href="/signUp">
                    <h1 className={styles.card}>Sign up</h1>
                  </a>
                </div>
              </>
            )}

            {session && (
              <button onClick={() => signOut()}>
                <h1 className={styles.card}>Sign out</h1>
              </button>
            )}
          </div>*/}
        </main>
      </div>
    </div>
  );
}
