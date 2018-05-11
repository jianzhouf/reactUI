import * as React from 'react'
import classnames from 'classnames'
export default class CheckBoxGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options: this.props.value || []
        }
    }

    onChange(e, s) {

        if (e.target.checked) {
            this.state.options.push(s.value)
        } else {
            this.state.options.splice(this.state.options.indexOf(s.value), 1)
        }
        this.setState()
        this.props.onChange && this.props.onChange(e, s)
    }


    get value() {
        return this.state.options
    }

    set value(arr) {
        this.setState({
            options: arr
        })
    }

    render() {
        const { name } = this.props
        return <div className={classnames('z-checkboxgroup', this.props.className)} ref={node => this.input = node}>
            {
                React.Children.map(this.props.children, element => {
                    const elementType = element.type.name;
                    if (elementType !== 'CheckBox') {
                        return null;
                    }

                    const newProps = {
                        ...element.props,
                        ...{
                            onChange: this.onChange.bind(this),
                            checked: this.state.options.indexOf(element.props.value) > -1,
                            name
                        }
                    }

                    return React.cloneElement(element, newProps)
                })
            }
        </div>
    }
}