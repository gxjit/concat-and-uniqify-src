import React from 'react'
import BrowseFiles from './BrowseFiles'
import DownloadButton from './DownloadButton'
import processData from '../modules/processData'

export default () => {
  const [download, setDownload] = React.useState('')
  const [downloadText, setDownloadText] = React.useState(
    'Please provide input file(s)'
  )
  const [anim, setAnim] = React.useState('')

  const handleDownload = files => {
    processData(files)
      .then(data => {
        setDownload(data)
        setDownloadText('Download')
      })
      .catch(err => setDownloadText(err.message))
      .finally(setAnim('animated tada'))
  }

  const handleDrop = e => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    handleDownload(files)
  }

  return (
    <>
      <div
        className='card bg-secondary rounded-lg text-light text-center mb-3 flex-grow-1 shadow'
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
      >
        <div className='card-body d-flex flex-column align-items-center justify-content-center'>
          <p className='h4 text-primary mb-4 text-shadow'>Drop Files here..</p>
          <BrowseFiles handleDownload={handleDownload} />
        </div>
      </div>
      <DownloadButton pass={[download, downloadText, anim, setAnim]} />
    </>
  )
}
