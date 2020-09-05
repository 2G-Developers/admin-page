import React, { Component, Fragment } from 'react'
import './Button.scss'

export default class ButtonPrimary extends Component {
    render() {
        return (
            <Fragment>
                <button className="btn btn--primary">Primary</button>
                <button className="btn btn--secondary">Secondary</button>
                <button className="btn btn--danger">Danger</button>
            </Fragment>
        )
    }
}
