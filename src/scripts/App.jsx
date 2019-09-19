import React from 'react'
import ReactDOM from 'react-dom'

import DropZone from './components/DropZone'

const App = () => (
  <div className='container'>
    <div className='row vh-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='col-md-8 col-sm-10 col-12'>
        <div className='card bg-primary rounded-lg h-85 shadow-lg'>
          <div className='card-body d-flex flex-column'>
            <DropZone />
          </div>
        </div>
      </div>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
