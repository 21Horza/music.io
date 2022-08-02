/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { text } from 'node:stream/consumers'
import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import MainLayout from '../../layouts/MainLayout'
import { ITrack, TrackActionTypes } from '../../types/track'
import cl from './IdPage.module.scss'

const TrackPage = ({serverSideTrack}) => {
    const router = useRouter(); // get id from params
    const [track, setTrack] = useState<ITrack>(serverSideTrack);
    const username = useInput("")
    const comment = useInput("")

    const commentHandler = async () => {
        try {
            const res = await axios.post("http://localhost:5000/tracks/comment", {
                username: username.value,
                text: comment.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, res.data]})
        } catch (e) {
            alert(e.message)    
        }
    }

  return (
    <MainLayout title={track.artist + " - " + track.name}>
        <button className={cl.goback} 
        onClick={() => router.push('/tracks')}>
            Go back to playlist
        </button>
        <div className={cl.infoContainer}>
                <img src={"http://localhost:5000/" + track.picture}/>
            <div className={cl.items}>
                    <div className={cl.trackName}>
                        {track.name}
                    </div>
                    <div className={cl.trackInfo}>
                        <div>
                            artist - {track.artist}
                            </div>
                            <div>
                        listens - {track.listens}
                            </div>
                    </div>
                <div className={cl.trackText}>
                    <h1>Text</h1>
                    <p>{track.text}</p>
                </div>
            </div>
        </div>
    </MainLayout>
    )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async({params}) => {
    const res = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverSideTrack: res.data
        }
    }
}