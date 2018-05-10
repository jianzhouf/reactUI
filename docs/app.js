import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import SideBar from './sideBar'
import './app.scss'

render(<div className="doc-container">
    <div className="doc-nav">
        <SideBar></SideBar>
    </div>
    <div className="doc-content">
        <HashRouter>
            <React.Fragment>
                <Route exact path="/" component={require('./pages/IndexPage').default}></Route>
                <Route exact path="/button" component={require('./pages/ButtonPage').default}></Route>
            </React.Fragment>
        </HashRouter>
    </div>
</div>, document.getElementById('app'))