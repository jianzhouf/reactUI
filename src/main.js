import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import SideBar from '@/docs/sideBar'
import '@/assets/css/main.scss'
render(<div className="doc-container">
    <div className="doc-nav">
        <SideBar></SideBar>
    </div>
    <div className="doc-content">
        <HashRouter>
            <React.Fragment>
                <Route exact path="/" component={require('./docs/index').default}></Route>
                <Route exact path="/docs/button" component={require('./docs/button').default} ></Route>
                <Route exact path="/docs/textBox" component={require('./docs/textBox').default} ></Route>
                <Route exact path="/docs/form" component={require('./docs/form').default} ></Route>
            </React.Fragment>
        </HashRouter>
    </div>
</div>, document.getElementById('app'))