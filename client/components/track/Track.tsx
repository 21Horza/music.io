/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren } from 'react'
import { ITrack } from '../../types/track';
import cl from  './Track.module.scss'
import { useRouter } from 'next/router';
import { FaPause } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai"
import { useActions } from '../../hooks/useAction';

interface TrackProps {
    track: ITrack;
    playing?: boolean;
}

const Track: React.FC<PropsWithChildren<TrackProps>> = ({track, playing = false}) => {
  const router = useRouter()

  const {playTrack, pauseTrack, setActive} = useActions()

  const play = (e) => {
    e.stopPropagation()
    setActive(track)
    playTrack()
  }

  return (
    <>
        <div onClick={() => router.push('/tracks/' + track._id)} 
        className={cl.track}>
              {!playing 
              ? 
              <FaPlay 
              onClick={play}
              className={cl.trackIcon}
              />
              : 
              <FaPause 
              onClick={pauseTrack}
              className={cl.trackIcon}
              />
              }
              <img alt='img' className={cl.trackPic} 
              height={45} 
              width={45} 
              src={"http://localhost:5000/" + track.picture}/>
            <div className={cl.container}>
              <div className={cl.element}>
                {track.name}
              </div>
              <div className={cl.element}>
                {track.artist}
              </div>
            </div>
            {playing && <div className={cl.time}>time 12:34 / 32:81</div>}
              <AiFillCloseCircle 
              className={cl.deleteBtn}
              onClick={(e) => e.stopPropagation()}
              />
        </div>
    </>
  )
}

export default Track;