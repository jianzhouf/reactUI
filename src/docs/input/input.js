

import * as React from 'react'
import Input from '@/components/input'
import marked from 'marked';
export default class ButtonPage extends React.Component {

    constructor(props) {
        super(props)
        this.document = require('./input.md').match(/(```[^]+?```)/g)
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
                        <Input className="z-space" value="内容" />
                        <Input className="z-space" disabled value="内容" />
                        <Input readOnly value="内容" />
                    </div>
                    <div className="demo-block__code">
                    </div>
                </div>

                <div className="demo-block">
                    <div className="demo-block__source" >
                        <Input className="z-space" placeholder="请输入" />
                        <Input className="z-space" disabled placeholder="请输入" />
                        <Input readOnly placeholder="请输入" />
                    </div>
                    <div className="demo-block__code">
                    </div>
                </div>

                <div className="demo-block">
                    <div className="demo-block__source" >
                        <Input type="textarea" className="z-space" />
                        <Input type="textarea" disabled />
                    </div>
                    <div className="demo-block__code">
                    </div>

                </div>
            </div>
        )
    }
}