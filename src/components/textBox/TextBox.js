import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Input from '../input'
export default class TextBox extends Input {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onChange(e) {
        this.setValue(e.target.value)
        this.props.onChange && this.props.onChange(e, this)
    }

    render() {
        const { className, type, onChange, value, ...otherProps } = this.props
        return (
            <input
                ref={node => this.input = node}
                {...otherProps}
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                className={classnames('z-textbox', className)} />
        )
    }
}
