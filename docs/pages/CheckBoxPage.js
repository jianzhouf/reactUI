import * as React from 'react'

import CheckBoxBasicExample from '../examples/CheckBoxBasic'
const CheckBoxBasicExampleSource = require('!raw-loader!../examples/CheckBoxBasic')

import CheckBoxGroupExample from '../examples/CheckBoxGroup'
const CheckBoxGroupExampleSource = require('!raw-loader!../examples/CheckBoxGroup')

export default class ButtonPage extends React.Component {

    getHtml(document) {
        return hljs.highlightAuto(document).value;
    }

    render() {
        return (<div>
            <h1>多选</h1>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <CheckBoxBasicExample></CheckBoxBasicExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(CheckBoxBasicExampleSource) }}></pre>
                </div>
            </div>

            <div className="demo-block">
                <div className="demo-block__source" >
                    <CheckBoxGroupExample></CheckBoxGroupExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(CheckBoxGroupExampleSource) }}></pre>
                </div>
            </div>
        </div>)
    }
}