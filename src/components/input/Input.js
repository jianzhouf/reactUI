import * as React from 'react'
import classnames from 'classnames'
export default class Input extends React.Component {

    onChange(e) {
        this.props.onChange && this.props.onChange(e)
    }

    render() {
        const { className, type, disabled, style, readOnly, value, placeholder, rows } = this.props
        return (
            type == 'textarea' ? <textarea
                rows={rows}
                disabled={disabled}
                readOnly={readOnly}
                style={style}
                value={value}
                placeholder={placeholder}
                onChange={this.onChange.bind(this)}
                className={classnames('z-textarea', className)}>
            </textarea> : <input
                    disabled={disabled}
                    readOnly={readOnly}
                    style={style}
                    value={value}
                    placeholder={placeholder}
                    onChange={this.onChange.bind(this)}
                    className={classnames('z-input', className)} />
        )
    }
}
