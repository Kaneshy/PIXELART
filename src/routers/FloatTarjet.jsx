import { NavLink } from "react-router-dom"
import img1 from '../assets/icons/art.png'
import img2 from '../assets/icons/hogar2.png'
import img3 from '../assets/icons/unsave.png'
import imgCamera from '../assets/icons/camera.png'
import imgVideos from '../assets/icons/youtubeA.png'
import imgMovie from '../assets/icons/movie2.png'
import imgPictures from '../assets/icons/picture.png'
import imgMusical from '../assets/icons/musical-note.png'
import './styles/showTarjet.css'

export const FloatTarjet = () => {
    return (
        <>
            <section id="tarjet_options">
                <div id="option-container" >
                    <NavLink to='/random' className="option">
                        <img className="icon-tarjet" src={img2} alt="Home" />
                    </NavLink>
                    <NavLink to='/art' className="option" >
                        <img className="icon-tarjet" src={img1} alt="" />
                    </NavLink>
                    <NavLink to='/photos' className="option">
                        <img className="icon-tarjet" src={imgCamera} alt="" />
                    </NavLink>
                    <NavLink to='/videos' className="option1">
                        <img className="icon-tarjet" src={imgVideos} alt="" />
                    </NavLink>
                    <NavLink to='/movies' className="option1">
                        <img className="icon-tarjet" src={imgMovie} alt="" />
                    </NavLink>
                    <NavLink to='/ImgApi' className="option1">
                        <img className="icon-tarjet" src={imgPictures} alt="" />
                    </NavLink>
                    <NavLink to='/about' className="option1">
                        <img className="icon-tarjet" src={imgMusical} alt="" />
                    </NavLink>


                    <NavLink to='/tarjet' className="option2">
                        <img className="icon-tarjet" src={img3} alt="" />
                    </NavLink>
                    
                </div>
            </section>
        </>
    )
}
