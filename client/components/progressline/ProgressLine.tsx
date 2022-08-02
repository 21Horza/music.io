import React from 'react'
import cl from './ProgressLine.module.scss'

interface ProgressLineProps {
    track: boolean;
    max: number;
    min: number;
    onChange: (e) => void
}

const ProgressLine: React.FC<ProgressLineProps> = ({max,min, track, onChange}) => {
  return (
    <div className={track 
    ? cl.trackContainer 
    : cl.lineContainer}>
        <input 
        onChange={onChange}
        min={0}
        max={max}
        value={min}
        type='range'
        />
    </div>
  )
}

export default ProgressLine