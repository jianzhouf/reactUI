import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'


export default class CheckBox extends React.Component {

    static defaultProps = {
        value: '',
        checked: false
    }

    static contextTypes = {
        form: PropTypes.any
    }

    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked
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
        return {
            checked: nextProps.checked,
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