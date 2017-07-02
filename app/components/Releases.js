import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import markdownFile from '../HEX-RELEASE.md';

require('./Releases.css');

class Releases extends Component {
    render() {
        return <div>
            <ReactMarkdown source={markdownFile} />
        </div>;
    }
}

export default Releases;
