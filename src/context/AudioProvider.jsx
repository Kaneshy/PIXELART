import { useState } from "react"
import { audioContext } from "./audioContext"

export const AudioProvider = ({children}) => {

    const [newAudio, setnewAudi] = useState([])

    const showAudiooA = (x) => {
        return setnewAudi([x])
    }

  return (
    <>
        <audioContext.Provider value={{setnewAudi, newAudio, showAudiooA}} >
            {children}
        </audioContext.Provider>
    </>
  )
}