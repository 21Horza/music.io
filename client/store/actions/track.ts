import { Dispatch } from "react"
import { TrackAction, TrackActionTypes } from "../../types/track"
import axios from "axios"

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const res = await axios.get("http://localhost:5000/tracks")
                dispatch({
                    type: TrackActionTypes.FETCH_TRACKS, 
                    payload: res.data
                })
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR, 
                payload: 'Error loading tracks..'
            })
        }
    }
}

export const findTrack = (query: string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const res = await axios.get(`http://localhost:5000/tracks/search?query=${query}`)
                dispatch({
                    type: TrackActionTypes.FETCH_TRACKS, 
                    payload: res.data
                })
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR, 
                payload: 'Error loading tracks..'
            })
        }
    }
}