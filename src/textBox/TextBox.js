import * as React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
export default class TextBox extends React.Component {

    static defaultProps = {
        value: ''
    }

    static contextTypes = {
        form: PropTypes.any
    }

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    // 更新状态
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            value: nextProps.value
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value })
        this.props.onChange && this.props.onChange(e, this)
    }

    get value() {
        return this.input.value
    }

    set value(value) {
        this.setState({ value })
    }

    componentDidMount() {
        const { form } = this.context
        if (form) {
            form.addFiled(this)
        }
    }

    render() {
        const { className, type, onChange, value, prefixIcon, suffixIcon, onClick, ...otherProps } = this.props
        return (<div onClick={onClick} className={classnames('z-textbox', className, prefixIcon && 'z-textbox-prefix', suffixIcon && 'z-textbox-suffix')}>
            {
                prefixIcon && <div className="z-textbox-prefix__icon">
                    {prefixIcon}
                </div>
            }
            <input
                type="text"
                ref={node => this.input = node}
                {...otherProps}
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                className="z-textbox__inner"
            />
            {
                suffixIcon && <div className="z-textbox-suffix__icon">
                    {suffixIcon}
                </div>
            }
        </div>)
    }
}
