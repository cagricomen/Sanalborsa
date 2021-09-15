import React from 'react'
import logo from '../assets/sb2.png'
import * as FaIcons from 'react-icons/fa';
import { menuItems } from './MenuItemData';
import MenuItem from './MenuItem';

const SideMenu = (props) => {
    const listItems = menuItems.map((menuItem, index) => (
        <div key={'mykey' + index}>
            <MenuItem
                key={menuItem.name.toString()}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                iconClassName={menuItem.iconClassName}
            />
            <div className="divider">
            </div>
        </div>

    ));
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
                        {listItems}
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
