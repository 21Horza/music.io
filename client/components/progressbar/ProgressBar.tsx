import React, { PropsWithChildren } from 'react';
import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
    currentStep: number;
}

const steps = ['Audio info', 'Download audio', 'Download a picture' ]

const ProgressBar: React.FC<PropsWithChildren<ProgressBarProps>> = ({currentStep,children}) => {
  return (
    <div className={styles.progressContainer}>
        <div className={styles.steps}>
            {steps.map((step,index) => 
                <div className={styles.step} 
                key={index}>
                    <h2>{step}</h2>
                </div>
                )}
        </div>
        <div 
        className={styles.formContainer}>
            {children}
        </div>
    </div>
  )
}

export default ProgressBar;