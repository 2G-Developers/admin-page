import React, { Component } from 'react'
import './Home.scss'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import ButtonPrimary from '../../components/Button/ButtonPrimary'

export default class Home extends Component {
    render() {
        return (
            <div className={this.props.show ? 'container': 'container container--remove-padding'}>
                <div className="content">
                    <GoogleMap />
                    <ButtonPrimary />
                </div>
            </div>
        )
    }
}
