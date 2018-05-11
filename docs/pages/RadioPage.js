import * as React from 'react'

import RadioBasicExample from '../examples/RadioBasic'
const RadioBasicExampleSource = require('!raw-loader!../examples/RadioBasic')

import RadioDisableExample from '../examples/RadioDisable'
const RadioDisableExampleSource = require('!raw-loader!../examples/RadioDisable')

import RadioGroupExample from '../examples/RadioGroup'
const RadioGroupExampleSource = require('!raw-loader!../examples/RadioGroup')
export default class ButtonPage extends React.Component {

    getHtml(document) {
        return hljs.highlightAuto(document).value;
    }

    render() {
        return (<div>
            <h1>单选框</h1>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <RadioBasicExample></RadioBasicExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(RadioBasicExampleSource) }}></pre>
                </div>
            </div>

            <div className="demo-block">
                <div className="demo-block__source" >
                    <RadioDisableExample></RadioDisableExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(RadioDisableExampleSource) }}></pre>
                </div>
            </div>

            <div className="demo-block">
                <div className="demo-block__source" >
                    <RadioGroupExample></RadioGroupExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(RadioGroupExampleSource) }}></pre>
                </div>
            </div>
        </div>)
    }
}