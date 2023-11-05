
import { useState, useEffect } from "react"
import './styles/buscador.css'
import axios from "axios"
import { FloatTarjet } from "./FloatTarjet"

export const PixelRequest = () => {

    const urlBase = 'https://api.pexels.com/v1/search'
    const API_KEY = 'g6NNvChocktKcyqmk4UQBE3Q4ZZhqxhoRsTuEg2wZzJNutxdwCiwNGjJ'

    const [search, setSearch] = useState('fire')
    const [movies, setmovies] = useState([])
    const [page, setPage] = useState(1)

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        fetchMovies()
    }

    const nextPage = () => {
        return setPage(page + 1)
    }

    const prevPage = () => {
        if(page===1) {
            return page
        }
        return setPage(page - 1 )
    }

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`${urlBase}?query=${search}`, {
                headers: {
                    Authorization: `${API_KEY}`
                },
                params: {
                  per_page: 12,
                  page: page,
                }
            });
            setmovies(response.data.photos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies();
      }, [page]);
    

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
                            <img src={movie.src.tiny} alt={movie.alt} />
                            <h2>{movie.photographer}</h2>
                            <p>{movie.alt}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-prev-nextpage" >
                    <button className="btn btn-primary" onClick={prevPage} >Previous Page</button>
                    <button className="btn btn-primary" onClick={nextPage} >Next Page</button>
                </div>
                

            </div>
        </>
    )
}
