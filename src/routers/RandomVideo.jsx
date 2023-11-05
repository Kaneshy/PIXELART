
import './styles/ContactScreem.css'
import './styles/Videos.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FloatTarjet } from './FloatTarjet'
import { videoContext } from '../context/videoContext'



export const RandomVideo = (props) => {

    const {showVideoA} = useContext(videoContext)

    return (
        <>
            <FloatTarjet></FloatTarjet>
            <section id='labelVideo' >
                {props.value.map((x) => {
                    let{id, name, autor, img} = x
                    return (
                        <>      
                                {console.log('randomvideo is runing', x)}
                                <div to='/tarjet' className="img-containerVideo">
                                    <NavLink to='/videosA' className='container-imgVideo' onClick={()=>showVideoA(x)} key={id}  >
                                        <img className="imgVideo" src={img} alt="" />
                                    </NavLink>
                                    <div className="video-title">{name}</div>
                                    <div className="video-autor">{autor} </div>
                                </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}