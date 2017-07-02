import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import markdownFile from '../HEX-RELEASE.md';

require('./Releases.less');

class Releases extends Component {
    render() {
        return <div className="Releases">
            <ReactMarkdown source={markdownFile} />
        </div>;
    }
}

export default Releases;
