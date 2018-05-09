import * as React from 'react'
import { render } from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import SideBar from '@/docs/sideBar'
import '@/assets/css/main.scss'

const docRoutes = ['button', 'textBox', 'form', 'radio']

render(<div className="doc-container">
    <div className="doc-nav">
        <SideBar></SideBar>
    </div>
    <div className="doc-content">
        <HashRouter>
            <React.Fragment>
                <Route exact path="/" component={require('./docs/index').default}></Route>
                {
                    docRoutes.map(item => <Route key={item} exact path={`/docs/${item}`} component={require(`./docs/${item}`).default} ></Route>)
                }
            </React.Fragment>
        </HashRouter>
    </div>
</div>, document.getElementById('app'))