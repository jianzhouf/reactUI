import * as React from 'react'

import ButtonTypeExample from '../examples/ButtonType'
const ButtonTypeExampleSource = require('!raw-loader!../examples/ButtonType')

import ButtonDisableExample from '../examples/ButtonDisable'
const ButtonDisableExampleSource = require('!raw-loader!../examples/ButtonDisable')

import ButtonSizeExample from '../examples/ButtonSize'
const ButtonSizeExampleSource = require('!raw-loader!../examples/ButtonSize')

export default class ButtonPage extends React.Component {

    getHtml(document) {
        return hljs.highlightAuto(document).value;
    }

    render() {
        return (<div>
            <h1>按钮</h1>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <ButtonTypeExample></ButtonTypeExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(ButtonTypeExampleSource) }}></pre>
                </div>
            </div>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <ButtonDisableExample></ButtonDisableExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(ButtonDisableExampleSource) }}></pre>
                </div>
            </div>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <ButtonSizeExample></ButtonSizeExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(ButtonSizeExampleSource) }}></pre>
                </div>
            </div>
        </div>)
    }
}