import * as React from 'react'
import Button from '@/components/button'
import marked from 'marked';
export default class ButtonPage extends React.Component {

    constructor(props) {
        super(props)
        this.document = require('./button.md').match(/(```[^]+?```)/g)
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
                <h1>按钮</h1>
                <div className="demo-block">
                    <div className="demo-block__source" >
                        <Button onClick={() => { alert(1) }}>Default</Button>
                        <Button type="primary">Primary</Button>
                        <Button type="success">Success</Button>
                        <Button type="warning">Warning</Button>
                        <Button type="danger">Danger</Button>
                    </div>
                    <div className="demo-block__code">
                        <div dangerouslySetInnerHTML={{ __html: this.getHtml(this.document[1]) }}></div>
                    </div>
                </div>

                <div className="demo-block">
                    <div className="demo-block__source" >
                        <Button onClick={() => { alert(1) }} disabled>Default</Button>
                        <Button disabled type="primary">Primary</Button>
                        <Button disabled type="success">Success</Button>
                        <Button disabled type="warning">Warning</Button>
                        <Button disabled type="danger">Danger</Button>
                    </div>
                    <div className="demo-block__code">
                        <div dangerouslySetInnerHTML={{ __html: this.getHtml(this.document[2]) }}></div>
                    </div>
                </div>

                <div className="demo-block">
                    <div className="demo-block__source" >
                        <Button size="large" type="primary">Large</Button>
                        <Button type="primary">Default</Button>
                        <Button size="small" type="primary">Small</Button>
                    </div>
                    <div className="demo-block__code">
                        <div dangerouslySetInnerHTML={{ __html: this.getHtml(this.document[2]) }}></div>
                    </div>
                </div>
            </div>
        )
    }
}