import React from 'react'

export default ({ handleDownload }) => {
  const browseRef = React.createRef()

  const handleRef = e => {
    e.preventDefault()
    browseRef.current.click()
  }

  const handleSelect = e => {
    const files = Array.from(e.target.files)
    handleDownload(files)
  }

  return (
    <>
      <input
        type='file'
        name=''
        id='fileSelect'
        accept='.doc,.docx,.html,.txt'
        // accept='*.*'
        multiple
        className='d-none'
        ref={browseRef}
        onChange={handleSelect}
      />
      <button
        type='button'
        className='btn btn-primary m-0 text-light shadow-sm'
        onClick={handleRef}
      >
        or Browse Files..
      </button>
    </>
  )
}
