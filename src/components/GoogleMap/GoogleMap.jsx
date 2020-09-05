import React, { Component } from 'react';
import './GoogleMap.scss'

export default class GoogleMap extends Component {
    render() {
        return (
            <div className="map">
                <div className="map__google">
                    <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8381.194181391513!2d80.20177117441217!3d12.95039570949041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dcaf1158b69%3A0x2faed53a93b675d8!2sJerusalem%20College%20of%20Engineering%20%2C%20Best%20Engineering%20College%20in%20Chennai!5e0!3m2!1sen!2sin!4v1599326641389!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" allowFullScreen="" tabIndex="0"></iframe>
                </div>
            </div>
        )
    }
}
