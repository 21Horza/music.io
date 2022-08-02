import { ITrack } from "./track";

export interface PlayerState {
    pause: boolean;
    volume: number;
    duration: number;
    currentTime: number;
    active: null | ITrack;
}

export enum PlayerActionTypes {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    VOLUME = "VOLUME",
    ACTIVE = "ACTIVE",
    DURATION = "DURATION",
    CURRENT_TIME = "CURRENT_TIME"
}

interface PlayAction {
    type: PlayerActionTypes.PLAY
}

interface PauseAction {
    type: PlayerActionTypes.PAUSE
}

interface VolumeAction {
    type: PlayerActionTypes.VOLUME,
    payload: number
}

interface ActiveAction {
    type: PlayerActionTypes.ACTIVE,
    payload: ITrack
}

interface DurationAction {
    type: PlayerActionTypes.DURATION,
    payload: number
}

interface CurrentTimeAction {
    type: PlayerActionTypes.CURRENT_TIME,
    payload: number
}

export type PlayerAction =  
    PlayAction 
    | PauseAction 
    | ActiveAction 
    | DurationAction 
    | VolumeAction 
    |CurrentTimeAction
