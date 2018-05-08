import * as React from 'react'
import PropTypes from 'prop-types'

export default class FormItem extends React.Component {

    constructor(props) {
        super(props)
    }

   

    componentDidMount() {
        console.log(this.context)
    }

    render() {
        const { children } = this.props
        return (
            <div>
                {children}
            </div>
        )
    }
}


FormItem.contextTypes = {
    component: PropTypes.any
};
