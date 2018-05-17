import * as React from 'react'

import FormBasicExample from '../examples/FormBasic'
const FormBasicExampleSource = require('!raw-loader!../examples/FormBasic')



export default class Page extends React.Component {

    getHtml(document) {
        return hljs.highlightAuto(document).value;
    }

    render() {
        return (<div>
            <h1>表单</h1>
            <div className="demo-block">
                <div className="demo-block__source" >
                    <FormBasicExample></FormBasicExample>
                </div>
                <div className="demo-block__code">
                    <pre dangerouslySetInnerHTML={{ __html: this.getHtml(FormBasicExampleSource) }}></pre>
                </div>
            </div>
           
        </div>)
    }
}