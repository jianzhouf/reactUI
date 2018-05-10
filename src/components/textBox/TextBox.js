import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
export default class TextBox extends React.Component {

    static contextTypes = {
        form: PropTypes.any
    }

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value })
        this.props.onChange && this.props.onChange(e, this)
    }

    get value() {
        return this.state.value
    }

    set value(value) {
        this.setState({ value })
    }

    componentDidMount() {
        const { form } = this.context
        if (form) {
            form.addFiled(this)
        }
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
