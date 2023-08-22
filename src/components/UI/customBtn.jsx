import React from "react"
import { NavLink } from 'react-router-dom';
import classes from './customBtn.module.css'


const CustomBtn = ({title, link}) => {
return (
    <NavLink to={link} className={classes.link__fav}>
        {title}
    </NavLink>
)
};

export default CustomBtn;