
import * as React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.Component {

    static contextTypes = {
        form: PropTypes.any
    }

    input //存储input DOM


    componentDidMount() {
        const { form } = this.context
        if (form) {
            form.addFiled(this)
        }
        if (this.props.value) {
            this.setValue(this.props.value)
        }
    }

    get value() {
        return this.state.value
    }

    set value(v) {
        this.setValue(v)
    }

    setValue(v) {
        if (['string', 'number'].indexOf(typeof v) !== -1) {
            this.setState({
                value: v
            })
        }
    }

}