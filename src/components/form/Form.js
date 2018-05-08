import * as React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {

    static childContextTypes = {
        form: PropTypes.any
    }

    getChildContext() {
        return {
            form: this
        }
    }

    _fields = []

    addFiled(field) {
        this._fields.push(field)
    }

    get fields() {
        return this._fields
    }

    get value() {
        const obj = {}
        for (const item of this._fields) {
            if (item.value) {
                obj[item.props.name] = item.value
            }
        }
        return obj
    }

    set value(v) {
        for (const item of this._fields) {
            if (v[item.props.name]) {
                item.value = v[item.props.name]
            }
        }
    }

    // data = {}

    render() {
        const {
            children,
            ...otherProps
        } = this.props
        return (
            <form {...otherProps}>{children}</form>
        )
    }
}
