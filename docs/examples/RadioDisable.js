import * as React from 'react'
import { Radio } from '../../src'

export default class Example extends React.Component {

    render() {
        return (
            <div>
                <Radio checked disabled>备选项1</Radio>
                <Radio disabled>备选项2</Radio>
            </div>
        )
    }

}
