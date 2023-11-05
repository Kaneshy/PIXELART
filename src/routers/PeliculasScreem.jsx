
import { useEffect, useState } from "react"
import './styles/buscador.css'
import { FloatTarjet } from "./FloatTarjet"

export const PeliculasScreem = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '848a8ca443a047275d4e6f6e44dfe83f'

    const [search, setSearch] = useState('dragon ball')
    const [movies, setmovies] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchMovies()
    }

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
            const data = await response.json()
            console.log(data.results)
            setmovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])
    


    return (
        <>
            <FloatTarjet></FloatTarjet>
            <div className="container">
                <h1 className="title" >Buscador</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Movie name"
                        value={search}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="search-button" >Search</button>
                </form>

                <div className="movie-list">
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <div className="move_date" >Release data: {movie.release_date}</div>
                            <p>{movie.overview}</p>
                            <div className="popularity">
                                {parseInt(movie.popularity)}%
                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}
