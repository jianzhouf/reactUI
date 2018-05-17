import * as React from 'react'
import { TextBox } from '../../src'

export default class Example extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TextBox suffixIcon={<i className="z-icon">&#xe8f2;</i>}></TextBox>
            </div>
        )
    }

}
