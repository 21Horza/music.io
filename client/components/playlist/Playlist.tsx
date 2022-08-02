import React, { PropsWithChildren } from 'react'
import { ITrack } from '../../types/track';
import Track from '../track/Track';

interface PlaylistProps {
    tracks: ITrack[];
}

const Playlist: React.FC<PropsWithChildren<PlaylistProps>> = ({tracks}) => {
  return (
    <>
        <div>
            {tracks.map(track => (
                <Track 
                    key={track._id}
                    track={track}
                />
            ))}
        </div>
    </>
  )
}

export default Playlist;