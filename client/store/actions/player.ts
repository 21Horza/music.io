import { PlayerAction, PlayerActionTypes } from "../../types/player";
import { ITrack } from "../../types/track";

export const playTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PLAY}
}

export const pauseTrack = (): PlayerAction => {
    return {type: PlayerActionTypes.PAUSE}
}

export const setVolume = (payload: number): PlayerAction => {
    return {type: PlayerActionTypes.VOLUME, payload}
}

export const setCurrentTime = (payload: number): PlayerAction => {
    return {type: PlayerActionTypes.CURRENT_TIME, payload}
}

export const setDuration = (payload: number): PlayerAction => {
    return {type: PlayerActionTypes.DURATION, payload}
}

export const setActive = (payload: ITrack): PlayerAction => {
    return {type: PlayerActionTypes.ACTIVE, payload}
}
