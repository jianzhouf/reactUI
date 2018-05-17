import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Option extends React.Component {

    static contextTypes = {
        select: PropTypes.any
    }

    parent() {
        return this.context.select
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.parent().addOption(this)
    }

    getLabel() {
        return this.props.children
    }

    getKey() {
        return this.props.value
    }

    onClick(e) {
        this.parent().onOptionClick(this)
    }

    isSelected() {
        return this === this.parent().state.selected
    }

    render() {
        return (<div
            className={classnames('z-select__option', this.isSelected() && 'is-selected')}
            onClick={this.onClick.bind(this)}
        >{this.props.children}</div>)
    }
}