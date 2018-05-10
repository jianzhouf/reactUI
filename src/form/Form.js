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

    data = {}

    get value() {
        const r = { ...this.data }
        for (const item of this._fields) {
            if (item.props.name) {
                if (item.props.disabled) {
                    continue
                }
                const tagName = item._reactInternalFiber.type.name
                if (tagName === 'Radio') {
                    if (item.state.checked)
                        r[item.props.name] = item.props.value
                } else if (tagName === 'CheckBox') {
                    if (item.state.checked) {
                        if (Array.isArray(r[item.props.name])) {
                            r[item.props.name].push(item.value)
                        } else {
                            r[item.props.name] = [item.value]
                        }
                    }
                } else {
                    r[item.props.name] = item.value
                }
            }

        }
        return r
    }

    set value(value) {
        this.data = { ...value }
        for (const item of this._fields) {
            if (item.props.name in value) {
                delete this.data[item.props.name]
                const tagName = item._reactInternalFiber.type.name
                if (tagName === 'Radio' && item.props.value === value[item.props.name]) {
                    item.setState({ checked: true })
                } else if (tagName === 'CheckBox') {
                    if (Array.isArray(value[item.props.name]) && value[item.props.name].indexOf(item.props.value) !== -1) {
                        item.setState({ checked: true })
                    }
                } else {
                    item.value = value[item.props.name]
                }
            }
        }
    }


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
