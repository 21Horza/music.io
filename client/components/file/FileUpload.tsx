import React, { useRef, PropsWithChildren } from 'react';

interface FileUploadProps {
    acceptedFormat: string;
    setFile: Function;
}

const FileUpload: React.FC<PropsWithChildren<FileUploadProps>>= ({setFile, children, acceptedFormat}) => {
  const ref = useRef<HTMLInputElement>()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  }

  return (
    <div onClick={() => ref.current.click()}>
      <input type='file'
      style={{display: 'none'}}
      accept={acceptedFormat}
      ref={ref}
      onChange={onChange}
      />
      {children}
    </div>
  )
}

export default FileUpload