import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}> Filmes em Destaque </h1>

        <Link href="/sobre-nos">Sobre</Link>
        <Link href="/busca">Ir para busca</Link>

        <ul>

          {list.map((item, i) => (

            <li key={i}>
              <a href={`/movie/${item.id}`} >
                <img width="150" src={`https://www.themoviedb.org/t/p/original${item.poster_path}`}></img>
              </a>
              <br />
              {item.title}
            </li>

          ))}

        </ul>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  }
}
