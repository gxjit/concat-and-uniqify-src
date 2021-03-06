import React from 'react'
import ReactDOM from 'react-dom'

import DropZone from './components/DropZone'

import vhFixListener from './modules/vhFixListener'

const App = () => {
  React.useEffect(() => {
    document.title = `Concat and uniqify text files`
  })

  return (
    <div className='container'>
      <a
        className='github-fork-ribbon'
        href='https://github.com/gxjit/concat-and-uniqify-src'
        data-ribbon='Fork me on GitHub'
        title='Fork me on GitHub'
      >
        Fork me on GitHub
      </a>
      <div className='row vh-100-fix d-flex align-items-center justify-content-center'>
        <div id='responsive' className='col-md-8 col-sm-10 col-12'>
          <div className='card bg-primary rounded-lg shadow-lg h-100'>
            <div className='card-body d-flex flex-column'>
              <DropZone />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

vhFixListener()

ReactDOM.render(<App />, document.getElementById('root'))
