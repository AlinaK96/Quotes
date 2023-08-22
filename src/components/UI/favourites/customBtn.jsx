import React from "react"
import classes from './customBtn.module.css'


const CustomBtn = ({title, link}) => {
return (
    <a href={link} className={classes.link__fav}>
        {title}
    </a>
)
};

export default CustomBtn;
