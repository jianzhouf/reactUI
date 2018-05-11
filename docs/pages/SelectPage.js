import * as React from 'react'

import SelectBasicExample from '../examples/SelectBasic'
const SelectBasicExampleSource = require('!raw-loader!../examples/SelectBasic')

export default class Page extends React.Component {

    getHtml(document) {
        return hljs.highlightAuto(document).value;
    }

    render() {
        return (<div>
            <h1>下拉框</h1>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <SelectBasicExample></SelectBasicExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(SelectBasicExampleSource) }}></pre>
                </div>
            </div>
        </div>)
    }
}