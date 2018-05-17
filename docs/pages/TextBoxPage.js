import * as React from 'react'

import TextBoxBasicExample from '../examples/TextBoxBasic'
const TextBoxBasicExampleSource = require('!raw-loader!../examples/TextBoxBasic')

import TextBoxIconExample from '../examples/TextBoxIcon'
const TextBoxIconExampleSource = require('!raw-loader!../examples/TextBoxIcon')

export default class Page extends React.Component {

    getHtml(document) {
        return hljs.highlightAuto(document).value;
    }

    render() {
        return (<div>
            <h1>输入框</h1>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <TextBoxBasicExample></TextBoxBasicExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(TextBoxBasicExampleSource) }}></pre>
                </div>
            </div>

             <div className="demo-block">
                <div className="demo-block__source" >
                    <TextBoxIconExample></TextBoxIconExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(TextBoxIconExampleSource) }}></pre>
                </div>
            </div>
        </div>)
    }
}