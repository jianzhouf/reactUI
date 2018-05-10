import * as React from 'react'
import { Button } from '../../src'

const Example = (props) => {
    return (
        <div>
            <Button>primary</Button>
            <Button type="primary">primary</Button>
            <Button type="warning">primary</Button>
            <Button type="success">primary</Button>
            <Button type="danger">primary</Button>
        </div>
    )
}

export default Example