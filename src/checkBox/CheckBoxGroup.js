import * as React from 'react'

export default class CheckBoxGroup extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {
        //     value: []
        // }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         value: nextProps.value || []
    //     }
    // }

    onChange(e, s) {
        this.props.onChange && this.props.onChange(e, s)
    }

    get value() {
        return this.state.value
    }

    set value(arr) {
        if (arr instanceof Array)
            this.setState({
                value: arr
            })
    }

    setValue(value) {
        const arr = this.state.value
        const index = arr.indexOf(value)
        if (index === -1) {
            arr.push(value)
        } else {
            arr.splice(index, 1)
        }
        this.setState({
            value: arr
        })
    }

    render() {
        const { name } = this.props
        return <div ref={node => this.input = node}>
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
                            name
                        }
                    }

                    return React.cloneElement(element, newProps)
                })
            }
        </div>
    }
}