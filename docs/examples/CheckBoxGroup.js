import * as React from 'react'
import { CheckBox } from '../../src'
import { Button } from '../../src'


export default class Example extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    checkBoxGroup

    render() {
        return (
            <div>
                <CheckBox.Group className="z-blank" ref={node => this.checkBoxGroup = node}>
                    <CheckBox value="1">选项1</CheckBox>
                    <CheckBox value="2">选项2</CheckBox>
                </CheckBox.Group>
                <Button onClick={() => { this.checkBoxGroup.value = ["1"] }}>赋值</Button>
                <Button className="z-space" onClick={() => { this.setState({ text: this.checkBoxGroup.value.join(',') }) }}>获取</Button>
                <span>结果是：{this.state.text}</span>
            </div>
        )
    }

}
