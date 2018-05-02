import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'

render(<HashRouter>
    <React.Fragment>
        <Route exact path="/" component={require('./pages/IndexPage').default}></Route>
        <Route exact path="/buttonpage" component={require('./pages/ButtonPage').default} ></Route>
    </React.Fragment>
</HashRouter>, document.getElementById('app'))