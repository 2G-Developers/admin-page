import React, { Component } from 'react'
import './SideDrawer.scss'
import {ReactComponent as ActivityIcon} from '../../assets/svgs/activity.svg';
import {ReactComponent as MailIcon} from '../../assets/svgs/mail.svg';
import {ReactComponent as UsersIcon} from '../../assets/svgs/users.svg';
import {ReactComponent as PieChartIcon} from '../../assets/svgs/pie-chart.svg';
import {ReactComponent as FacebookIcon} from '../../assets/svgs/facebook.svg';
import {ReactComponent as CalendarIcon} from '../../assets/svgs/calendar.svg';
import {ReactComponent as MapIcon} from '../../assets/svgs/map-pin.svg';
import {ReactComponent as PhoneIcon} from '../../assets/svgs/phone-call.svg';
import {ReactComponent as AirplayIcon} from '../../assets/svgs/airplay.svg';
import {ReactComponent as FilmIcon} from '../../assets/svgs/film.svg';
import {ReactComponent as GalleryIcon} from '../../assets/svgs/camera.svg';
import {ReactComponent as UserIcon} from '../../assets/svgs/user.svg';
import {ReactComponent as ClockIcon} from '../../assets/svgs/clock.svg';

export default class SideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer';
        if(this.props.show) {
            drawerClasses = 'side-drawer side-drawer--open'
        }

        return (
            <div className={drawerClasses}>
                <div className="side-drawer__block">
                    <div className="side-drawer__navigation">
                        <ul>
                            <span className="side-drawer__title">Dashboard</span>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><ActivityIcon className="side-drawer__svg"/>Default</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><PieChartIcon className="side-drawer__svg"/>Analytics</a>
                            </li>
                            <span className="side-drawer__title">Display Data</span>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><FilmIcon className="side-drawer__svg"/>Carousel</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><FacebookIcon className="side-drawer__svg"/>Social Media</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><GalleryIcon className="side-drawer__svg"/>Gallery</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><UsersIcon className="side-drawer__svg"/>Teams</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><AirplayIcon className="side-drawer__svg"/>Testinomials</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><UserIcon className="side-drawer__svg"/>Authentication</a>
                            </li>
                            <span className="side-drawer__title">App</span>
                            <li className="side-drawer__list side-drawer__list--active">
                                <a  href="#" className="side-drawer__link"><MapIcon className="side-drawer__svg"/>Maps</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><MailIcon className="side-drawer__svg"/>Mail</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><CalendarIcon className="side-drawer__svg"/>Event</a>
                            </li>
                            <span className="side-drawer__title">Help</span>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><ClockIcon className="side-drawer__svg"/>History</a>
                            </li>
                            <li className="side-drawer__list">
                                <a  href="#" className="side-drawer__link"><PhoneIcon className="side-drawer__svg"/>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
