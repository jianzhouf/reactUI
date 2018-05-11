import * as React from 'react'
import { Button } from '../../src'

const Example = (props) => {
    return (
        <div>
            <Button type="primary" size="large">Large</Button>
            <Button type="primary">Default</Button>
            <Button type="primary" size="small">Small</Button>
        </div>
    )
}

export default Example