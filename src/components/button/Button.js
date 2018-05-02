import * as React from 'react'
import classnames from 'classnames'
export default class Button extends React.PureComponent {

    render() {
        const { className, children } = this.props
        return (
            <button
                className={classnames(className, 'z-button')}
            >{children}</button>
        )
    }
}