import './styles/aboutScreen.css'
import dataAudios from './data/dataAudios'
import { useState } from 'react'
import invisible from '../assets/icons/invisible.png'
import imgVideos from '../assets/icons/Youtube_logo.png'
import imgLetras from '../assets/icons/letras.png'
import imgSpotify from '../assets/icons/Spotify_logo.png'
import imgGoogle from '../assets/icons/googleLogo.png'
import { useEffect } from 'react'
import { FloatTarjet } from './FloatTarjet'


export const AboutScreem = () => {

    const URL_YOUTUBE_BASE = 'https://www.youtube.com/results?search_query='
    const URL_LETRAS_BASE = 'https://www.letras.com/'
    const URL_SPOTIFY_BASE = 'https://open.spotify.com/search/'
    const URL_GOOGLE_BASE = 'https://www.google.com/search?q='

    const [mainBar, setmainBar] = useState(0)
    const [tm, settm] = useState(false)
    const [element, setelement] = useState({})
    const [durationA, setduration] = useState('')
    const [isPlaying, setisPlaying] = useState(true)
    const [volumeB, setvolumeB] = useState(60)

    const hide_Te = () => {
        settm(false)
    }

    const toggleTm = (audio) => {
        setisPlaying(false)
        setelement(audio)
        handletimeA()
        settm(true)
    }

    const onPlay = (e) => {
        console.log(e)
        setduration(e.target.duration)
        e.target.currentTime = mainBar
    }

    const handleInputRange = (e) => {
        setisPlaying(false)
        setmainBar(e.target.value)
        setTimeout(() => {
            setisPlaying(true)
        }, 50);
    }

    const handleTimeUpdate = (e) => {
        setmainBar(e.target.currentTime)
        e.target.volume = volumeB / 100
    }

    const playPasue = () => {
        if (isPlaying) {
            setisPlaying(false)
        } else {
            setisPlaying(true)
        }
    }

    const nextSong = () => {
        setisPlaying(false)
        if (dataAudios.length == element.id) {
            setelement(dataAudios.find((x) => x.id == 1))
        } else {
            setelement(dataAudios.find((x) => x.id == (element.id + 1)))
        }
        handletimeA()
    }

    const previosSong = () => {
        setisPlaying(false)
        if (element.id == 1) {
            setelement(dataAudios.find((x) => x.id == 1))
        } else {
            setelement(dataAudios.find((x) => x.id == (element.id - 1)))
        }
        handletimeA()
    }

    const repeatSong = () => {
        setisPlaying(false)
        handletimeA()
    }

    const handletimeA = () => {
        setmainBar(0)
        setTimeout(() => {
            setisPlaying(true)
        }, 500);
    }

    const handleVolume = (e) => {
        setvolumeB(e.target.value)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop();
    }, [element]);

    return (
        <>
            <div className="container-sections">
                <section className='container-mainAudio' >
                    {dataAudios.map((audio) => {
                        let { id, img, nameSong, artist } = audio
                        return (
                            <div key={id} className='audio-container' onClick={() => toggleTm(audio)} >
                                <p >{id}</p>
                                <img loading='lazy' src={img} alt="" />
                                <div className="infoSongA">
                                    <p>{nameSong}</p>
                                    <p className='artist' >{artist}</p>
                                </div>
                                <p className='duration'>3.21</p>
                            </div>
                        )
                    })}
                </section >
                {tm ? (
                    <section className="tajetEmergent">
                        <div className="container-TE">
                            <div onClick={hide_Te} className="hide-TE">
                                <img className="icon-tarjet" src={invisible} alt="Home" />
                            </div>
                            <img width="100" height="100" src={element.img} alt="" />
                            <div className="infoSongA">
                                <p>{element.nameSong}</p>
                                <p className='artist' >{element.artist}</p>
                            </div>
                            <p>{(Math.floor(durationA) / 60).toFixed(2)}</p>
                            {isPlaying ? (
                                <audio
                                    onEnded={nextSong}
                                    onTimeUpdate={handleTimeUpdate}
                                    onPlay={onPlay} className='audio-play'
                                    autoPlay name='media' >
                                    <source src={element.music} type='audio/mp3' />
                                </audio>
                            ) : console.log('isnotruning')}
                            <div className="inputVolume">
                                <input type="range" min="0" max='100' value={volumeB}
                                    onChange={handleVolume}
                                />
                            </div>
                            <div className="inputTrack">
                                <input type="range" min="0" max={durationA} value={mainBar} className="seek_slider"
                                    onChange={handleInputRange}
                                />
                            </div>
                            <div className="btns-rep">
                                <div >
                                    <i className="fas fa-random fa-2x btnA"></i>
                                </div>
                                <div  onClick={previosSong}>
                                    <i className="fa fa-step-backward fa-2x btnA"></i>
                                </div>
                                <div  onClick={playPasue}>
                                    {isPlaying
                                        ? (<i className="fa fa-pause fa-2x btnA"></i>)
                                        : (<i className="fa fa-play-circle fa-2x btnA"></i>)}
                                </div>
                                <div  onClick={nextSong}>
                                    <i className="fa fa-step-forward fa-2x btnA"></i>
                                </div>
                                <div onClick={repeatSong}>
                                    <i className="fa fa-repeat fa-2x btnA"></i>

                                </div>
                            </div>
                            <div className="links-container">
                                <div className="youtubeLink">
                                    <a href={`${URL_YOUTUBE_BASE}${element.nameSong}+${element.artist}`} target='_blank' >
                                        <img className="icon-youtube" src={imgVideos} alt="Home" />
                                    </a>
                                </div>
                                <div className="youtubeLink">
                                    <a href={`${URL_LETRAS_BASE}${element.artist}/${element.nameSong}/`} target='_blank' >
                                        <img className="icon-youtube" src={imgLetras} alt="Home" />
                                    </a>
                                </div>
                                <div className="youtubeLink">
                                    <a href={`${URL_SPOTIFY_BASE}${element.artist}%20${element.nameSong}`} target='_blank' >
                                        <img className="icon-youtube" src={imgSpotify} alt="Home" />
                                    </a>
                                </div>
                                <div className="youtubeLink">
                                    <a href={`${URL_GOOGLE_BASE}${element.artist}%20${element.nameSong}&sourceid=chrome&ie=UTF-8`} target='_blank' >
                                        <img className="icon-youtube" src={imgGoogle} alt="Home" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>) : (
                    console.log('false')
                )}
            </div>
            <FloatTarjet></FloatTarjet>
        </>
    )
}
