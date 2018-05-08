

import * as React from 'react'
import TextBox from '@/components/textBox'
import marked from 'marked';
export default class textboxPage extends React.Component {

    constructor(props) {
        super(props)
        this.document = require('./textBox.md').match(/(```[^]+?```)/g)
    }

    getHtml(document) {
        return marked(document, {
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        })
    }

    render() {

        return (
            <div>
                <h1>输入框</h1>
                <div className="demo-block">
                    <div className="demo-block__source" >
                        <TextBox className="z-space" />
                        <TextBox className="z-space" disabled />
                        <TextBox readOnly />
                    </div>
                    <div className="demo-block__code">
                    </div>
                </div>

                <div className="demo-block">
                    <div className="demo-block__source" >
                        <TextBox className="z-space" placeholder="请输入" />
                        <TextBox className="z-space" disabled placeholder="请输入" />
                        <TextBox readOnly placeholder="请输入" />
                    </div>
                    <div className="demo-block__code">
                    </div>
                </div>

                <div className="demo-block">
                    <div className="demo-block__source" >
                        <TextBox type="textarea" className="z-space" />
                        <TextBox type="textarea" disabled />
                    </div>
                    <div className="demo-block__code">
                    </div>

                </div>
            </div>
        )
    }
}