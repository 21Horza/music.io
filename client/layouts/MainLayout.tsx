import { Global } from '../styles/global.module';
import React, { PropsWithChildren } from 'react'
import Navbar from '../components/navbar/Navbar';
import Player from '../components/player/Player';
import Head from 'next/head';

interface MainLayoutProps {
    title?: string;
    children: any;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> 
  
  = ({children, title, description, keywords}) => {

    const websiteName = "MUSIC.IO"

  return (
    <>
        <Head>
          <title>
            {title === undefined 
            ? websiteName 
            : websiteName + " | " + title || websiteName}
          </title>
            <meta name='description' content={`${websiteName}` + description 
            || "Online music plaform"}/>
            <meta name='robots' content='index, follow'/>
            <meta name='keywords' content={keywords || "music, platform, online"}/>
            <meta name='viewport' content={"width=device-width, initial-scale=1"}/>
        </Head>
          <Global />
          <Navbar />
          {children}
          <Player />
    </>
  )
}

export default MainLayout;