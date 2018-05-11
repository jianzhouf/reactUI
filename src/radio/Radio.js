import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function getChecked(props) {
    return props.checkedValue !== undefined ? props.checkedValue === props.value : Boolean(props.checked)
}
export default class Radio extends React.Component {

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

    get value() {
        return this.state.value
    }

    set value(v) {

    }

    render() {
        const { name, disabled } = this.props
        return (
            <label className="z-radio">
                <span className={classnames("z-radio__input", this.state.checked && 'is-checked', disabled && 'is-disabled')}>
                    <span className="z-radio__inner"></span>
                    <input
                        ref={node => this.input = node}
                        name={name}
                        disabled={disabled}
                        checked={this.state.checked}
                        onChange={this.onChange.bind(this)}
                        className="z-radio__original"
                        type="radio"
                    />
                </span>
                <span className={classnames("z-radio__label", this.state.checked && 'is-checked', disabled && 'is-disabled')}>{this.props.children}</span>
            </label>
        )
    }
}