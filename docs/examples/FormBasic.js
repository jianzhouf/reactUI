import * as React from 'react'
import { Button, TextBox, CheckBox, Radio, Select, Form } from '../../src'

export default class Example extends React.Component {

    render() {
        return (<div>
            <Form ref={node => this.form = node}>
                <div className="z-form-h">
                    <div className="z-form-field">
                        <label className="z-form-label">姓名</label>
                        <div className="z-form-input"><TextBox placeholder="请输入" name="name"></TextBox></div>
                    </div>
                    <div className="z-form-field">
                        <label className="z-form-label">性别</label>
                        <div className="z-form-input">
                            <Radio.Group name="sex">
                                <Radio value="1">男</Radio>
                                <Radio value="0">女</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="z-form-field">
                        <label className="z-form-label">爱好</label>
                        <div className="z-form-input">
                            <CheckBox.Group name="hobby">
                                <CheckBox value="1">篮球</CheckBox>
                                <CheckBox value="2">足球</CheckBox>
                                <CheckBox value="3">羽毛球</CheckBox>
                            </CheckBox.Group>
                        </div>
                    </div>
                    <div className="z-form-field">
                        <label className="z-form-label">省</label>
                        <div className="z-form-input">
                            <Select placeholder="请选择" name="province">
                                <Select.Option value="zj">浙江</Select.Option>
                                <Select.Option value="ah">安徽</Select.Option>
                                <Select.Option value="sh">上海</Select.Option>
                                <Select.Option value="bj">北京</Select.Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </Form>
            <Button className="z-space" type="primary" onClick={() => { this.form.value = { name: 'hah', sex: '0', province: 'ah', hobby: ['1', '2'] } }}>赋值</Button>
            <Button type="primary" onClick={() => { console.log(this.form.value) }}>获取</Button>
        </div>)
    }
}