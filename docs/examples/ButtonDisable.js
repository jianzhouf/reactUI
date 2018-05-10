import * as React from 'react'
import { Button } from '../../src'

const Example = (props) => {
    return (
        <div>
            <Button disabled>primary</Button>
            <Button type="primary" disabled>primary</Button>
            <Button type="warning" disabled>primary</Button>
            <Button type="success" disabled>primary</Button>
            <Button type="danger" disabled>primary</Button>
        </div>
    )
}

export default Example