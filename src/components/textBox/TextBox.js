import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Input extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { form } = this.context
        if (form) {
            form.addFiled(this)
        }
        if (this.props.value) {
            this.setValue(this.props.value)
        }
    }

    static contextTypes = {
        form: PropTypes.any
    }

    onChange(e) {
        this._value = e.target.value
        this.props.onChange && this.props.onChange(e)
    }

    _value

    get value() {
        return this._value
    }

    set value(v) {
        this.setValue(v)
    }

    setValue(v) {
        if (['string', 'number'].indexOf(typeof v) !== -1) {
            this._value = v + ""
            this.refs.input.value = v + ""
        }
    }

    render() {
        const { className, type, onChange, value, ...otherProps } = this.props
        return (
            <input
                ref="input"
                {...otherProps}
                onChange={this.onChange.bind(this)}
                className={classnames('z-textbox', className)} />
        )
    }
}
