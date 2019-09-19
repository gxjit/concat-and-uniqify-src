import { compose } from 'ramda/es'

import getDataAsync from './getDataAsync'
import getUnique from './getUnique'
import arrayFromNewlines from './arrayFromNewlines'
import filesArrayToStringsArray from './filesArrayToStringsArray'

export default files =>
  new Promise((resolve, reject) =>
    getDataAsync(files)
      .then(res =>
        compose(
          arrayFromNewlines,
          getUnique,
          filesArrayToStringsArray
        )(res)
      )
      .then(data => resolve(data))
      .catch(err => reject(new Error(err)))
  )
