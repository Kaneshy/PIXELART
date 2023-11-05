import React, { useContext } from 'react'
import './styles/showTarjet.css'
import './styles/Videos.css'
import { FloatTarjet } from './FloatTarjet'
import { videoContext } from '../context/videoContext'


export const ShowVideos = () => {

    const {showVideo } = useContext(videoContext)

    return (
        <>
            <section id='labelA' >
                <FloatTarjet></FloatTarjet>
                {showVideo.map(x => (
                    <>
                        {console.log('video is runnign')}
                        <div className="container-show">
                            <div className="Video-show">
                                <iframe className='videoI' src={x.video} allowFullScreen  ></iframe>
                            </div>
                            <div className="text">
                                <h2>{x.name}</h2>
                                <p className='p1' >{x.autor}</p>
                                <p className='p2' >{x.desc}</p>
                            </div>
                        </div>
                    </>
                ))}
            </section>
        </>
    )
}