import * as React from 'react'
import { Select } from '../../src'

export default class Example extends React.Component {
    render() {
        return (
            <Select placeholder="请选择" onChange={(key, option) => { console.log(key, option) }}>
                <Select.Option value="1">选项1</Select.Option>
                <Select.Option value="2">选项2</Select.Option>
                <Select.Option value="3">选项3</Select.Option>
                <Select.Option value="4">选项4</Select.Option>
            </Select>
        )
    }
}
