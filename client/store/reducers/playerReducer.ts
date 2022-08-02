import { PlayerAction, PlayerActionTypes, PlayerState } from "../../types/player"

const initialState = {
    pause: true,
    volume: 50,
    duration: 0,
    currentTime: 0,
    active: null
}

export const playerReducer = (state = initialState, action: PlayerAction): 
    
    PlayerState => {
    switch (action.type) {
        case PlayerActionTypes.PLAY:
            return {...state, pause: false}
        case PlayerActionTypes.PAUSE:
            return {...state, pause: true}
        case PlayerActionTypes.CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypes.DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypes.VOLUME:
            return {...state, volume: action.payload}
        case PlayerActionTypes.ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}

        default:
            return state
    }
}