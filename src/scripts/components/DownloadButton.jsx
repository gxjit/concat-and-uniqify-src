import React from 'react'

export default ({ pass }) => {
  const [download, downloadText, anim, setAnim] = pass
  const downloadRef = React.createRef()

  const handleDownload = e => {
    e.preventDefault()
    downloadRef.current.click()
  }

  return (
    <div className='d-flex justify-content-center'>
      <a
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(download)}`}
        download='download.txt'
        className='d-none'
        ref={downloadRef}
      />
      <button
        type='button'
        className={`btn btn-secondary m-0 text-primary font-weight-bold shadow-lg ${anim}`}
        onClick={handleDownload}
        onAnimationEnd={() => setAnim('')}
        disabled={!(downloadText === 'Download')}
      >
        {downloadText}
      </button>
    </div>
  )
}
