import React, { useContext } from 'react'
import { tarjetContext } from '../context/tarjetContext'
import './styles/ContactScreem.css'
import { NavLink } from 'react-router-dom'
import { showContext } from '../context/showContext'
import imgA from '../assets/icons/sad-face.png'
import img3 from '../assets/icons/unsave.png'
import { FloatTarjet } from './FloatTarjet'


export const TarjetImg = () => {

    const { selectedTarjet, savetTarjet } = useContext(tarjetContext)
    const { showTarjetA } = useContext(showContext)


    return (

        <>
            <FloatTarjet></FloatTarjet>
            <section id='labelA' >
                {selectedTarjet.length > 0 ? (selectedTarjet.map(x => (
                    <>
                        <div className='img-container' >
                            <NavLink to='/show' onClick={() => showTarjetA(x)}  >
                                <img src={x.img} alt="" className='img' />
                            </NavLink>
                            <div className='img-title' >{x.name}</div>
                            <div className='img-autor' >{x.autor}</div> 
                            <div onClick={() => savetTarjet(x)} className="save-tarjet">
                                <img className="icon-tarjet" src={img3} alt="" />
                            </div>
                        </div>
                    </>
                ))
                ) : (
                    <>
                        <div className="containerEmpty">
                            <img className='img-Empty' src={imgA} alt="" />
                            <p className='P-Empty' > No tienes imagenes guardadas </p>
                        </div>

                    </>
                )
                }
            </section>
        </>
    )
}
