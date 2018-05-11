import * as React from 'react'
import { Radio } from '../../src'

export default class Example extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 2
        }
    }

    onChange(e, s) {
        this.setState({
            value: s.value
        })
    }

    render() {
        return (
            <div>
                <Radio value="1" checked={this.state.value == "1"} onChange={this.onChange.bind(this)}>value=1</Radio>
                <Radio value="2" checked={this.state.value == "2"} onChange={this.onChange.bind(this)}>value=2</Radio>
            </div>
        )
    }

}
