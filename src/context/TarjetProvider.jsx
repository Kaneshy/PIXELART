import { NavLink } from 'react-router-dom'
import { tarjetContext } from './tarjetContext'
import { useReducer } from 'react'

const initialState = []

export const TarjetProvider = ({ children }) => {

    const tarjetReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[TARJET] saveTarjet':
                console.log('is runing saveTarjet')
                return state.filter(x => x.id !== action.payload.id)
            case '[TARJET] likedTarjet':
                console.log('is runing likedTarjet')
                return state.filter(x => x.id !== action.payload.id)
            case '[TARJET] openTarjet':
                console.log('is runing', state)
                if (state.some((x) => x.id === action.payload.id)) {
                    return state; 
                  }
                return [...state, action.payload];
            default:
                return state 
        }
    }

    const [selectedTarjet, dispatch] = useReducer(tarjetReducer, initialState)

    const savetTarjet = (x) => {
        const action = {
            type: '[TARJET] saveTarjet',
            payload: x
        }
        dispatch(action)
    }
    const likedTarjet = (x) => {
        const action = {
            type: '[TARJET] likedTarjet',
            payload: x
        }
        dispatch(action)
    }
    const openTarjet = (x) => {
        const action = {
            type: '[TARJET] openTarjet',
            payload: x
        }
        dispatch(action)
    }

    return (
        <>
            <tarjetContext.Provider value={{selectedTarjet, savetTarjet, likedTarjet, openTarjet}} >
                {children}
            </tarjetContext.Provider>
        </>
    )
}
