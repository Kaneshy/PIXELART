import './styles/HomeScreem.css'
import { Link } from "react-router-dom"

export const HomeScreem = () => {


    return (
        <>
            <section className="container-header" >
                <h2 className="title-pa" >PIXELART</h2>
                <h1> Uso de alchivos multimedia como por ejemplo; </h1>
                <div className="container-p">
                    <Link to='/about' className="pr">
                        <div className="title-pr">
                            MUSIC
                        </div>
                        <p> Un reproductor de musica con enlaces a la letra de las canciones y a youtube</p>

                    </Link>
                    <Link to='/random' className="pr">
                        <div className="title-pr">
                            PHOTOS, ART and IMAGES
                        </div>
                        <p> Visualizador de imagenes con varias categorias como home, art and photos. Puedes guardar las imagenes pero no se guardan al eliminar el chache</p>

                    </Link>
                    <Link to='/videos' className="pr">
                        <div className="title-pr">
                            VIDEOS
                        </div>
                        <p>Reproductor de videos con varios tipos de embled como mega, youtube, etc </p>

                    </Link>
                    <Link to='/ImgApi' className="pr">
                        <div className="title-pr">
                            IMG API
                        </div>
                        <p>Uso de una API de imagenes, al ingresar puedes usar un buscador donde escribes la palabra clave y retorna varias imagenes ordenadas, posee botones de next and previous page para generar mas imagenes </p>

                    </Link>
                    <Link to='/movies' className="pr">
                        <div className="title-pr">
                            MOVIES API
                        </div>
                        <p>Uso de una API de caratulas de peliculas y una descripcion, la api posee mas elementos que se pueden utilizar </p>

                    </Link>
                </div>
            </section>
        </>
    )
}
