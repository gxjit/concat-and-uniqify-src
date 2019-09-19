export default file => {
  return new Promise((resolve, reject) => {
    if (!(file instanceof File) || !file.type.startsWith('text')) {
      throw new TypeError('Must be a readable text File')
    }
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = () => {
      reject(new Error(`Error reading ${file.name} : ${reader.error}`))
    }
    reader.readAsText(file)
  })
}
