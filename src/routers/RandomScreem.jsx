
import './styles/ContactScreem.css'
import { useContext } from 'react'
import { tarjetContext } from '../context/tarjetContext'
import { NavLink } from 'react-router-dom'
import img3 from '../assets/icons/save2.png'
import { FloatTarjet } from './FloatTarjet'
import { showContext } from '../context/showContext'

export const RandomScreem = (props) => {


    const { openTarjet } = useContext(tarjetContext)
    const { showTarjetA } = useContext(showContext)



    return (
        <>
            
            <section id='labelA' >
                {props.value.map((x) => {
                    let { id, name, autor, img } = x
                    return (
                        <div key={id} to='/tarjet' className="img-container">
                            <NavLink to='/show' onClick={() => showTarjetA(x)}  >
                                <img className="img" src={img} alt="" loading='lazy' />
                            </NavLink>
                            <div className="img-title">{name}</div>
                            <div className="img-autor">{autor} </div>
                            <div onClick={() => openTarjet(x)} className="save-tarjet">
                                <img className="icon-tarjet" src={img3} alt="" />
                            </div>
                        </div>
                    )
                })}
            </section>
            <FloatTarjet></FloatTarjet>
        </>
    )
}