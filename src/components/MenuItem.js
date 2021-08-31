import React from "react";
import {  Link } from "react-router-dom";



const MenuItem = (props) => {
  const { name,  iconClassName, to  } = props;

  return (
    <li onClick={props.onClick}>
      <Link
        exact='true'
        to={to}
        className={`menu-item`}
      >
        <div className="menu-icon">
          {iconClassName}
        </div>
        <span>{name}</span>
      </Link>
      
    </li>
  );
};

export default MenuItem;