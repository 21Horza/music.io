import React, {  useEffect} from 'react'
import cl from './Player.module.scss'
import ProgressLine from '../progressline/ProgressLine'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useAction'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { CgPlayTrackNext } from 'react-icons/cg'
import { HiVolumeUp } from 'react-icons/hi'

let audio;

const Player = () => {

    const {pause, currentTime, active, volume, duration } = useTypedSelector(state => state.player)

    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration} = useActions()

    useEffect(() => {
      if (!audio) {
        audio = new Audio()
      } else {
        setTrack()
        play()
      }

    }, [active])
    
    const setTrack = () => {
      if (active) {
        audio.src = "http://localhost:5000/" + active.audio
        audio.volume = volume / 100
        audio.onloadedmetadata = () => {
          setDuration(audio.duration)
        }
        audio.ontimeupdate = () => {
          setCurrentTime(audio.currentTime)
        }
      }
    }
    
    const play = () => {
      if (pause) {
        playTrack()
        audio.play()
      } else {
        pauseTrack()
        audio.pause()
      }
    }

    const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      audio.volume = (Number(e.target.value)) / 100
      setVolume(Number(e.target.value))
    }

    const currentTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      audio.currentTime = (Number(e.target.value))
      setCurrentTime(Number(e.target.value))
    }

    if (!active) {
      return null
    }

  return (
      <div className={cl.playerContainer}>
        <div className={cl.trackProgress}>
          <ProgressLine 
            track={true}
            min={currentTime} 
            max={duration} 
            onChange={currentTimeHandler} /> 
        </div>
            <div className={cl.track}>
              <h3>{active?.name}</h3>
              <h3>{active?.artist}</h3>
            </div>
            <div className={cl.controller}>
          <CgPlayTrackNext 
          className={`${cl.plIcon} ${cl.prevIcon}`}/>
          {pause 
          ?
            <FaPlay onClick={play}
            className={cl.plIcon}/>
          :
            <FaPause onClick={play}
            className={cl.plIcon}/>
            }
            <CgPlayTrackNext
            className={`${cl.plIcon} ${cl.nextIcon}`}/>
            </div>
          <div className={cl.volume}>
            <HiVolumeUp
            className={cl.plIcon}/>
          <ProgressLine 
            track={false}
            min={volume} 
            max={100} 
            onChange={volumeHandler} /> 
          </div>
    </div>
  )
}

export default Player