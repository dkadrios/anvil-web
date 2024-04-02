import Instructions from './components/Instructions'
import React from 'react'
import ReactDOM from 'react-dom'
import Releases from './components/Releases'

require('./main.less')

ReactDOM.render(
  <div>
    <p>
      Anvil is the operating system used by the {''}
      <a
        href="http://www.zendrum.com/index.php?route=product/category&path=79"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zendrum STOMPBLOCK
      </a>
      .<br />
    </p>
    <hr />
    <p className="link">
      <a href="stompblock37.zip">
        <span className="material-symbols-outlined">cloud_download</span>
        <span>Download Latest Firmware</span>
      </a>

      <a href="#instructions">
        <span className="material-symbols-outlined">description</span>
        <span>Firmware Instructions</span>
      </a>
    </p>
    <hr />
    <h3>Updates</h3>
    <Releases />
    <hr />
    <h3 id="instructions">
      <div
        className="material-symbols-outlined"
        style={{
          position: 'relative',
          top: '3px',
        }}
      >
        description
      </div>
      Applying the Update
    </h3>
    <Instructions />
  </div>,
  document.body.appendChild(document.createElement('div'))
)
