import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Busca() {

    const [searchText, seSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if (searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();
            setMovieList(json.list);
        }
    }

    return (
        <div className={styles.container}>

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>Busca</h1>

                <input type="text" value={searchText} onChange={e => seSearchText(e.target.value)}></input>
                <button onClick={handleSearch}>Buscar</button>

                <hr />

                <ul>

                    {movieList.map((item, i) => (

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

        </div>
    )
}
