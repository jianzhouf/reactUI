import * as React from 'react'
import { TextBox } from '../../src'

export default class Example extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div>
                <TextBox className="z-space" name="a" onChange={(e, s) => { this.setState({ text: s.value }) }}></TextBox>
                <TextBox className="z-space" name="b" readOnly></TextBox>
                <TextBox className="z-space" name="c" disabled></TextBox>
                <div>{this.state.text}</div>
            </div>
        )
    }

}
