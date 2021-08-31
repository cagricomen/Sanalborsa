import React from 'react'
import logo from '../assets/sb2.png'
import prof from '../assets/profile.jpg'
import * as FaIcons from 'react-icons/fa';
const SideMenu = (props) => {
    return (
        <div className="side-menu">
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="sanalborsa" />
                </div>
                <div className="toggle-menu-btn">
                    <FaIcons.FaArrowAltCircleLeft />
                </div>
                <div className="title">
                    Sanal Borsa
                </div>
                <div className="divider">
                </div>

                <div className="main-menu" >
                    <ul>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                    <FaIcons.FaHome />
                                </div>
                                <text className="text">Ana Sayfa</text>
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                    <FaIcons.FaHome />
                                </div>
                                <text className="text">Ana Sayfa</text>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="side-menu-footer">
                <div className="avatar">
                    <img src={logo} alt="user" />
                </div>
                <div className="user-info">
                    <h5>Çağrı Çömen</h5>
                    <p>cagri.comen45@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default SideMenu;
