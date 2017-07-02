import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import Releases from './components/Releases';

ReactDOM.render(
    <div>
        <div>
            Anvil is the operating system used by <a href="https://zendrum.com">Zendrum STOMPBOX</a>.<br />
            Check back here often for news and updates!
        </div>
        <hr />
        <h3>Updates</h3>
        <Releases />
        <hr />
        <h3>Updating Firmware</h3>
    </div>,
    document.body.appendChild(document.createElement('div'))
);
