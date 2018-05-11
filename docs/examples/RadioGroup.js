import * as React from 'react'
import { Radio } from '../../src'
import { Button } from '../../src'

export default class Example extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    radioGroup

    render() {
        return (
            <div>
                <Radio.Group className="z-blank" ref={node => this.radioGroup = node}>
                    <Radio value="1">备选项1</Radio>
                    <Radio value="2">备选项2</Radio>
                </Radio.Group>
                <Button onClick={() => { this.radioGroup.value = "1" }}>赋值</Button>
                <Button className="z-space" onClick={() => { this.setState({ text: this.radioGroup.value }) }}>获取</Button>
                <span>结果是：{this.state.text}</span>
            </div>

        )
    }

}
