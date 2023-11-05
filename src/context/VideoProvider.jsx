import { useState } from "react"
import { videoContext } from "./videoContext"

export const VideoProvider = ({children}) => {

    const [showVideo, setshowVideo] = useState([])

    const showVideoA = (x) => {
        return setshowVideo([x])
    }

  return (
    <>
        <videoContext.Provider value={{setshowVideo, showVideo, showVideoA}} >
            {children}
        </videoContext.Provider>
    </>
  )
}