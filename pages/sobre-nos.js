import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function SobreNos({ author }) {
    return (

        <div className={styles.container}>

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                
                <h1 className={styles.title}>
                    Sobre o sistema
                </h1>

                <p>O sistema foi feito em live para demonstrar os primeiros passos com framework next</p>
               
                <p>Autor: {author}</p>

            </main>

        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            author: 'Bonieky'
        }
    }
}

