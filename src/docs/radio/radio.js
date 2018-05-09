import * as React from 'react'
import Radio from '@/components/radio'

export default class RadioPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }

    onChange(e, s) {
        this.setState({
            value: s.value
        })
    }

    render() {
        return (<div>
            <h1>表单</h1>
            <div className="demo-block">
                <div className="demo-block__source">
                    <Radio value="1" checked={this.state.value == 1} onChange={this.onChange.bind(this)}>value=1</Radio>
                    <Radio value="2" checked={this.state.value == 2} onChange={this.onChange.bind(this)}>value=2</Radio>

                    <Radio value="3" disabled>fdsaf</Radio>
                </div>
                <div className="demo-block__code"></div>
            </div>
        </div >)
    }
}