import readFile from './readFile'

export default files => {
  return Promise.all(
    files.map(file => {
      return readFile(file)
    })
  )
}
