import React, {useState} from 'react'
import ProgressBar from '../../components/progressbar/ProgressBar'
import MainLayout from '../../layouts/MainLayout'
import cl from './TrackForm.module.scss'
import FileUpload from '../../components/file/FileUpload'
import { useInput } from '../../hooks/useInput'
import axios from "axios";
import { useRouter } from 'next/router'

const CreateTrack = () => {
  const [active, setActive] = useState(0)
  const [audio, setAudio] = useState(null)
  const [image, setImage] = useState(null)
  const name = useInput("")
  const artist = useInput("")
  const text = useInput("")
  const router = useRouter()
  
  const nextHandler = () => {
    if (active !== 2) {
      setActive(prev => prev + 1)
    } else {
      const formData = new FormData()
      formData.append("name", name.value)
      formData.append("text", text.value)
      formData.append("artist", artist.value)
      formData.append("picture", image)
      formData.append("audio", audio)
      axios.post("http://localhost:5000/tracks", formData)
      .then(res => router.push('/tracks'))
      .catch(e => alert(e))
    }
  }

  const backHandler = () => {
      setActive(prev => prev - 1)
  }

  return (
    <MainLayout>
      <ProgressBar currentStep={1}>
        {active === 0 &&
          <form className={cl.formContainer}>
            <input 
              {...name}
              className={cl.name} 
              type='text' 
              placeholder={'Audio name'}/>
            <input 
              {...artist}
              className={cl.artist} 
              type='text' 
              placeholder={'Artist'}/>
            <input 
              {...text}
              className={cl.text} 
              placeholder={'Text'}/>
          </form>
        }
        {active === 1 &&
          <FileUpload acceptedFormat='image/*' 
            setFile={setImage}>
              <button
              className={cl.uploadStep}
              >Upload cover</button>
          </FileUpload>
        }
        {active === 2 &&
          <FileUpload acceptedFormat='audio/*' 
            setFile={setAudio}>
            <button
            className={cl.uploadStep}
            >Upload audio</button>
          </FileUpload>
        }
      </ProgressBar>
      <div className={cl.btnsContainer} >
        <button 
          disabled={active === 0} 
          onClick={() => backHandler()}>
            Back
          </button>
        <button 
          onClick={() => nextHandler()}>
            Next
          </button>
      </div>
    </MainLayout>
  )
}

export default CreateTrack