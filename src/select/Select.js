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

    addOption(option) {
        this.options.push(option)
    }

    handleClickOutside() {
        this.setState({ visible: false })
    }

    onClick() {
        this.setState({ visible: true })
    }

    onOptionClick(option) {
        this.setState({
            selected: option,
            visible: false
        })
    }

    componentDidMount() {
        const inputRect = findDOMNode(this.textbox).getBoundingClientRect()
        const dropDownRect = this.dropDown.getBoundingClientRect()
        this.resetWidth(inputRect.width)
    }

    resetWidth(w) {
        this.setState({
            width: w + 'px'
        })
    }

    render() {
        const { className, placeholder } = this.props
        return (<div className={classnames('z-select', className)}>
            <TextBox
                ref={e => this.textbox = e}
                readOnly
                placeholder={placeholder}
                onClick={this.onClick.bind(this)}
                value={this.state.selected ? this.state.selected.getLabel() : ''}
            />
            <div ref={e => this.dropDown = e} className="z-select__dropdown" style={{ width: this.state.width, display: !this.state.visible ? 'none' : 'block' }}>
                {this.props.children}
            </div>
        </div>)
    }
}
export default ClickOutside(Select)