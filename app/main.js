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
        Zendrum STOMPBOX
      </a>.<br />
    </p>
    <hr />
    <p className="downloadLink">
      <a href="https://zendrumstudio.com/includes/anvil/anvil-firmware.zip">
        <span>Download latest firmware</span>
      </a>
    </p>
    <hr />
    <h3>Updates</h3>
    <Releases />
    <hr />
    <h3>Updating Firmware</h3>
    <Instructions />
  </div>,
  document.body.appendChild(document.createElement('div')),
)
