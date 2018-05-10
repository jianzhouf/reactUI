import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function getChecked(props) {
    return (props.checkedValue || []).indexOf(props.value) !== -1 || Boolean(props.checked)
}
export default class CheckBox extends React.Component {

    static contextTypes = {
        form: PropTypes.any
    }

    constructor(props) {
        super(props)
        this.state = {
            checked: getChecked(props)
        }
    }

    componentDidMount() {
        const { form } = this.context
        if (form) {
            form.addFiled(this)
        }
    }

    // 更新状态
    static getDerivedStateFromProps(nextProps, prevState) {
        const checked = getChecked(nextProps)
        return {
            checked
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