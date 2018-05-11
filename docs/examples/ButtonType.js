import * as React from 'react'
import { Button } from '../../src'

const Example = (props) => {
    return (
        <div>
            <Button>default</Button>
            <Button type="primary">primary</Button>
            <Button type="warning">warning</Button>
            <Button type="success">success</Button>
            <Button type="danger">danger</Button>
        </div>
    )
}

export default Example