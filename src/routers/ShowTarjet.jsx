import { tarjetContext } from '../context/tarjetContext'
import React, { useContext } from 'react'
import './styles/showTarjet.css'
import { showContext } from '../context/showContext'
import { FloatTarjet } from './FloatTarjet'
import { useEffect } from 'react'

export const ShowTarjet = () => {

    const { showimg } = useContext(showContext)
    const { openTarjet } = useContext(tarjetContext)

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <section id='labelA' >
                <FloatTarjet></FloatTarjet>
                {showimg.map(x => (
                        <div key={x.id} className="container-show">
                            <div className="img-show">
                                <img src={x.img} alt="" />
                            </div>
                            <div className="btn-show">
                                <button className='btn btn-primary' onClick={() => openTarjet(x)} >Save</button>
                            </div>
                            <div className="text">
                                <h2>{x.name}</h2>
                                <p className='p1' >{x.autor}</p>
                                <p className='p2' >{x.desc}</p>
                            </div>
                        </div>
                ))}
            </section>
        </>
    )
}
