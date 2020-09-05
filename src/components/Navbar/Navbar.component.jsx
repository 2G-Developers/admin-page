import React, { Component } from 'react'
import './Navbar.scss'

import { ReactComponent as ToggleLeft } from '../../assets/svgs/toggle-left.svg'
import { ReactComponent as ToggleRight } from '../../assets/svgs/toggle-right.svg'

export default class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <nav className="navbar__navigation">
                    <div className="navbar__logo">
                        <div className="navbar__brand">
                            <a href="/index.html" className="navbar__link">
                                {this.props.show ? '2G Developers': '2G'}
                            </a>
                            { 
                            this.props.show 
                                ? (
                                    <a href="/index.html" className="navbar__toggler" onClick={this.props.drawerClickHandler} >
                                        <ToggleLeft className="navbar__toggle navbar__toggle--left" />
                                    </a>
                                )
                                : (
                                    <a href="/index.html" className="navbar__toggler" onClick={this.props.drawerClickHandler} >
                                        <ToggleRight className="navbar__toggle navbar__toggle--right" />
                                    </a>
                                )
                            }
                            
                            
                        </div>
                        {/* <div className="navbar__contacts">
                            <a href="/">whatsapp</a>
                            <a href="/">Phone</a>
                        </div> */}
                    </div>
                    <div className="spacer"></div>
                    {/* <div className="navbar__navigation-items">
                        <ul>
                            <li><a href="/">whatsapp</a></li>
                            <li><Link to="/">phone</Link></li>                            
                        </ul>
                    </div> */}
                </nav>
            </header>
        )
    }
}
