import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class RadioGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: undefined
        }
    }

    onChange(e, s) {
        this.setState({
            value: s.value
        })
        this.props.onChange && this.props.onChange(e, s)
    }

    get value() {
        return this.state.value
    }

    set value(value) {
        this.setState({
            value
        })
    }

    render() {
        return <div className={classnames("z-radiogroup", this.props.className)} ref={node => this.input = node} >
            {
                React.Children.map(this.props.children, element => {
                    const elementType = element.type.name;
                    if (elementType !== 'Radio' && elementType !== 'RadioButton') {
                        return null;
                    }

                    const newProps = {
                        ...element.props,
                        ...{
                            onChange: this.onChange.bind(this),
                            checkedValue: this.state.value,
                            name: this.props.name
                        }
                    }

                    return React.cloneElement(element, newProps)
                })
            }
        </div>
    }
}