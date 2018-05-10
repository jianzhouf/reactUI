import * as React from 'react'
import classnames from 'classnames'
export default class Button extends React.Component {

    onClick(e) {
        this.props.onClick && this.props.onClick(e)
    }

    render() {
        const { className, children, type, disabled, style, size } = this.props
        return (
            <button
                className={classnames('z-button', type && `z-button-${type}`, size && `z-button-${size}`, className)}
                disabled={disabled}
                onClick={this.onClick.bind(this)}
                style={style}
            >{children}</button>
        )
    }
}

Button.defaultProps = {
    type: 'default',
    disabled: false,
    size: 'default'
}