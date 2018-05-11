import * as React from 'react'
import { CheckBox } from '../../src'

export default class Example extends React.Component {

    render() {
        return (
            <div>
                <CheckBox>选项1</CheckBox>
                <CheckBox>选项2</CheckBox>
                <CheckBox disabled>禁用选项</CheckBox>
            </div>
        )
    }

}
