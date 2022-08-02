import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Playlist from '../../components/playlist/Playlist'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import MainLayout from '../../layouts/MainLayout'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks, findTrack } from '../../store/actions/track'
import cl from './Index.module.scss'

const Index = () => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<string>();
    const dispatch = useDispatch() as NextThunkDispatch;
    const [time, setTime] = useState(null)
    
    const searchQuery = async (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
      if (time) {
        clearTimeout(time)
      }
      setTime(
        setTimeout(async () => {
          await dispatch(findTrack(query))
        }, 500)
      )
    }

    if (error) {
      return <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    }

  return (
    <MainLayout title='Playlist'>
        <div className={cl.playlistContainer}>
          <h3>
            Playlist
          </h3>
            <input 
              placeholder='Find a track ...'
              value={query}
              onChange={searchQuery}
            />
          <button className={cl.addTrack} 
            onClick={() => router.push('/tracks/createtrack')}>
            Add a new song
          </button>
        </div>
        <Playlist tracks={tracks} />
    </MainLayout>
  )
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
  return {
    props: {},
  };
});