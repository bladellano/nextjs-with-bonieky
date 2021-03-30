import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function MovieItem({ info }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}> Filme: {info.title} </h1>

                <p>{info.vote_average}</p>
                <p>{info.overview}</p>
                <img src={`https://www.themoviedb.org/t/p/original${info.backdrop_path}`} width="400"></img>

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

export async function getServerSideProps(context) {
    // export async function getStaticProps(context) {

    const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
    const json = await res.json();
    console.log('json', json)

    return {
        props: {
            info: json.info
        }
    }
}
