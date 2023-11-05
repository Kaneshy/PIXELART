import { NavBar } from "./routers/components/NavBar"
import { HomeScreem } from "./routers/HomeScreem"
import { AboutScreem } from "./routers/AboutScreem"
import { Routes, Route, Navigate } from "react-router-dom"
import { UsuarioProvaider } from "./routers/context/UsuarioProvaider"
import { TarjetImg } from "./routers/TarjetImg"
import { TarjetProvider } from "./context/TarjetProvider"
import { ShowTarjet } from "./routers/showTarjet"
import { ShowProvider } from "./context/ShowProvider"
import dataRandom from './routers/data/dataramdom'
import { RandomScreem } from "./routers/RandomScreem"
import artGallery from "./routers/data/dataImg"
import photosData from "./routers/data/dataPhotos"
import dataVideos from "./routers/data/dataVIdeos"
import { PeliculasScreem } from "./routers/PeliculasScreem"
import { VideoProvider } from "./context/VideoProvider"
import { ShowVideos } from "./routers/ShowVIdeos"
import { RandomVideo } from "./routers/RandomVideo"
import { PixelRequest } from "./routers/PixelRequest"
import { AudioProvider } from "./context/AudioProvider"




export const App = () => {
    return (
        <UsuarioProvaider>
            <TarjetProvider>
                <ShowProvider>
                    <VideoProvider>
                        <AudioProvider>
                            <NavBar></NavBar>
                            <Routes>
                                <Route path='/' element={<HomeScreem></HomeScreem>} ></Route>
                                <Route path='/about' element={<AboutScreem></AboutScreem>} ></Route>
                                <Route path='/show' element={<ShowTarjet></ShowTarjet>}></Route>
                                <Route path='/' element={<Navigate to='/' />}></Route>
                                <Route path='/tarjet' element={<TarjetImg></TarjetImg>}></Route>
                                <Route path='/photos' element={<RandomScreem value={photosData} ></RandomScreem>} ></Route>
                                <Route path='/art' element={<RandomScreem value={artGallery} ></RandomScreem>} ></Route>
                                <Route path='/random' element={<RandomScreem value={dataRandom} ></RandomScreem>} ></Route>
                                <Route path='/videos' element={<RandomVideo value={dataVideos} ></RandomVideo>} ></Route>
                                <Route path='/movies' element={<PeliculasScreem></PeliculasScreem>} ></Route>
                                <Route path='/videosA' element={<ShowVideos></ShowVideos>} ></Route>
                                <Route path='/ImgApi' element={<PixelRequest></PixelRequest>} ></Route>
                            </Routes>
                        </AudioProvider>
                    </VideoProvider>
                </ShowProvider>
            </TarjetProvider>
        </UsuarioProvaider>
    )
}
