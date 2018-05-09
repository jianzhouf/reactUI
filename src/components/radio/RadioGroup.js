import * as React from 'react'
import Input from '../input'

export default class RadioGroup extends Input {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            value: nextProps.value
        }
    }

    onChange(e, s) {
        this.setValue(s.value)
        this.props.onChange && this.props.onChange(e, s)
    }

    render() {
        return <div ref={node => this.input = node}>
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