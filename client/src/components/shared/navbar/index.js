import React from 'react'
import Avatar from "../avatar"
import {
    Search as SearchIcon, 
    Notifications as NotificationsIcon
} from '@material-ui/icons/';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import "./navbar.css"

function Navbar(props) {
    const userAvatar = props.userAvatar
    return (
        <nav>
            <div className="navbar__logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <Link to="/create">
                        <SearchIcon className="navbar__icon" style={{ color: 'white' }}/>
                    </Link>
                </li>
                <li className="navbar__item">
                    <NotificationsIcon className="navbar__icon" style={{ color: 'white' }}/>
                </li>
                <li className="navbar__item navbar__avatar">
                    <Avatar userAvatar={userAvatar}></Avatar>
                    <div class="navbar__dropdownContent">
                        <Link className="navbar__dropdownLink" to="/settings">
                            Account Settings
                        </Link>
                        <Link className="navbar__dropdownLink" to="/logout">
                            Log Out
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar as default}