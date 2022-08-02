import React from 'react'
import MainLayout from '../layouts/MainLayout'
import  cl from "./Index.module.scss"
import { useTypewriter} from 'react-simple-typewriter'
import {SiMusicbrainz} from 'react-icons/si'

const Index = () => {
  const {text} = useTypewriter({
    words: ["Your favourite tracks are here", 
      "Listen what you want",
      "Find the top tracks and share comments with others"
    ],
    loop: true
  })

  return (
      <>
      <MainLayout>
        <div className={cl.mainContainer}>
          <div className={cl.title}>
          <SiMusicbrainz className={cl.mIcon}/>
              <h1>MUSIC.IO</h1>
          </div>
              <span>
                {text}
              </span>
        </div>
      </MainLayout>
      </>
  )
}

export default Index