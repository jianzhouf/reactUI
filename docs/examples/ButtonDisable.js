import * as React from 'react'
import { Button } from '../../src'

const Example = (props) => {
    return (
        <div>
            <Button disabled>default</Button>
            <Button type="primary" disabled>primary</Button>
            <Button type="warning" disabled>warning</Button>
            <Button type="success" disabled>success</Button>
            <Button type="danger" disabled>danger</Button>
        </div>
    )
}

export default Example