import { useState } from "react"
import { showContext } from "./showContext"


export const ShowProvider = ({children}) => {

    const [showimg, setshowimg] = useState([])

    const showTarjetA = (x) => {
        return setshowimg([x])
    }

  return (
    <>
        <showContext.Provider value={{setshowimg, showimg, showTarjetA}} >
            {children}
        </showContext.Provider>
    </>
  )
}
