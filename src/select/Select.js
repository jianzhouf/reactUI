import * as React from 'react'
import { findDOMNode } from 'react-dom'
import classnames from 'classnames'
import ClickOutside from 'react-click-outside'
import PropTypes from 'prop-types'
import TextBox from '../textBox'

class Select extends React.Component {

    static childContextTypes = {
        select: PropTypes.any
    }

    getChildContext() {
        return {
            select: this
        }
    }

    static contextTypes = {
        form: PropTypes.any
    }

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            width: 'auto',
            selected: undefined
        }
    }

    options = []

    addOption(option) {
        this.options.push(option)
    }

    handleClickOutside() {
        this.setState({ visible: false })
    }

    onClick() {
        this.setState({ visible: !this.state.visible })
    }

    onOptionClick(option) {
        const oldKey = this.state.selected ? this.state.selected.getKey() : undefined
        const newKey = option.getKey()
        this.setState({
            selected: option,
            visible: false
        })
        if (oldKey !== newKey) {
            this.props.onChange && this.props.onChange(newKey, option)
        }
    }

    get value() {
        const key = this.state.selected ? this.state.selected.getKey() : undefined
        return key
    }

    set value(v) {
        this.options.forEach(option => {
            if (option.props.value === v) {
                this.setState({
                    selected: option
                })
            }
        });
    }

    componentDidMount() {
        const inputRect = findDOMNode(this.textbox).getBoundingClientRect()
        const dropDownRect = this.dropDown.getBoundingClientRect()
        this.resetWidth(inputRect.width)
        const { form } = this.context
        if (form) {
            form.addFiled(this)
        }
    }

    resetWidth(w) {
        this.setState({
            width: w + 'px'
        })
    }

    render() {
        const { className, placeholder } = this.props
        return (<div ref={s => this.s = s} className={classnames('z-select', className)}>
            <TextBox
                ref={e => this.textbox = e}
                readOnly
                placeholder={placeholder}
                onClick={this.onClick.bind(this)}
                suffixIcon={<i className="z-icon">&#xe8f2;</i>}
                value={this.state.selected ? this.state.selected.getLabel() : ''}
            />
            <div ref={e => this.dropDown = e} className="z-select__dropdown" style={{ width: this.state.width, display: !this.state.visible ? 'none' : 'block' }}>
                {this.props.children}
            </div>
        </div>)
    }
}
export default ClickOutside(Select)