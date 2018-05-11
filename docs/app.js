import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import './app.scss'
import route from './route'
console.log(route)
render(<div className="doc-container">
    <div className="doc-nav">
        <ul className="nav-item">
            {
                route.map((item, index) => <li key={index}><a href={`#${item.url}`}>{item.name}</a></li>)
            }
        </ul>
    </div>
    <div className="doc-content">
        <HashRouter>
            <React.Fragment>
                <Route exact path="/" component={require('./pages/IndexPage').default}></Route>
                {
                    route.map((item, index) => <Route key={index} exact path={item.url} component={require(`${item.path}`).default}></Route>)
                }
            </React.Fragment>
        </HashRouter>
    </div>
</div>, document.getElementById('app'))