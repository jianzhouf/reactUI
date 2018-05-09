import * as React from 'react'
import { Link } from 'react-router-dom'
export default class SideBar extends React.Component {

    render() {
        return (
            <div className="z-sidebar">
                <ul>
                    <li className="nav-item">
                        <div className="nav-group">
                            <div className="nav-group__title">Basic</div>
                            <ul className="nav-item">
                                <li><a href="#/docs/button">Button按钮</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-group">
                            <div className="nav-group__title">Form</div>
                            <ul className="nav-item">
                                <li><a href="#/docs/radio">Radio单选</a></li>
                                <li><a href="#/docs/textBox">TextBox输入框</a></li>
                                <li><a href="#/docs/form">form表单</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}