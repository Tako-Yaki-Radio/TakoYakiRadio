import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  if (process.env.DATABASE_URL !== "__NONE")
    return <meta http-equiv="refresh" content="0;url=/" />;

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
}
