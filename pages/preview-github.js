import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  if (process.env.DATABASE_URL === "__NONE")
    return (
      <>
        <div>
          <div className={styles.container}>
            <Head>
              <title>TakoYaki Radio</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
              <h1 className={styles.title}>Thanks for contributing!</h1>
            </main>
          </div>
        </div>
      </>
    );

  router.push("/");
}
