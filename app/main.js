import Instructions from './components/Instructions';
import React from 'react';
import ReactDOM from 'react-dom';
import Releases from './components/Releases';

require('./main.less');

ReactDOM.render(
    <div>
        <p>
            Anvil is the operating system used by {''}
            <a href="https://zendrum.com" target="_blank" rel="noopener noreferrer">
                Zendrum STOMPBOX
            </a>.<br />
        </p>
        <hr />
        <p className="downloadLink">
            <a href="https://zendrumstudio.com/includes/anvil/anvil-firmware.zip">Download latest firmware</a>
        </p>
        <hr />
        <h3>Updates</h3>
        <Releases />
        <hr />
        <h3>Updating Firmware</h3>
        <Instructions />
    </div>,
    document.body.appendChild(document.createElement('div'))
);
