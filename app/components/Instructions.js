import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import markdownFile from '../HEX-README.md';

require('./Instructions.less');

class Instructions extends Component {
    render() {
        return <div className="Instructions">
            <ReactMarkdown source={markdownFile} />
        </div>;
    }
}

export default Instructions;
