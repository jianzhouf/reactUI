import * as React from 'react'
import classnames from 'classnames'
import Input from '../input'

function getChecked(props) {
    return (props.checkedValue || []).indexOf(props.value) !== -1 || Boolean(props.checked)
}
export default class CheckBox extends Input {

    constructor(props) {
        super(props)
        this.state = {
            checked: getChecked(props)
        }
    }

    //不添加到 Form组件里
    shouldAddForm = false

    // 更新状态
    static getDerivedStateFromProps(nextProps, prevState) {
        const checked = getChecked(nextProps)
        return {
            checked,
            value: nextProps.value
        }
    }

    onChange(e) {
        this.setState({
            checked: e.target.checked
        })
        this.props.onChange && this.props.onChange(e, this)
    }

    render() {
        const { disabled } = this.props
        return (<label className={classnames('z-checkbox', this.state.checked && 'is-checked', this.props.disabled && 'is-disabled')}>
            <span className="z-checkbox__input">
                <span className="z-checkbox__inner"></span>
                <input
                    ref={node => this.input = node}
                    disabled={disabled}
                    checked={this.state.checked}
                    onChange={this.onChange.bind(this)}
                    className="z-checkbox__original"
                    type="checkbox"
                />
            </span>
            <span className="z-checkbox__label">{this.props.children}</span>
        </label>)
    }
}