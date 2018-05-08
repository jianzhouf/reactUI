import * as React from 'react'
import Form from '@/components/form'
import TextBox from '@/components/textBox'
import Button from '@/components/button'

export default class ButtonPage extends React.Component {

    constructor(props) {
        super(props)
        // this.document = require('./button.md').match(/(```[^]+?```)/g)
    }

    getHtml(document) {
        return marked(document, {
            highlight: function (code) {
                return hljs
                    .highlightAuto(code)
                    .value;
            }
        })
    }
    handleClick() {
        console.log(this.refs.testForm.value)
    }
    componentDidMount() {
        this.refs.testForm.value = { c: 11 }
        this.refs.a.value = "222"
    }


    render() {

        return (
            <div>
                <h1>表单</h1>
                <div className="demo-block">
                    <div className="demo-block__source">
                        <Form id="testForm" ref="testForm">
                            <TextBox ref="a" name="a" disabled type="text" />
                            <div>
                                <TextBox name="c" type="text" />
                            </div>
                            <TextBox name="b" type="text" value="11"/>
                        </Form>

                        <Button
                            onClick={this
                                .handleClick
                                .bind(this)}>获取</Button>
                    </div>
                    <div className="demo-block__code"></div>
                </div>
            </div>
        )

    }

}