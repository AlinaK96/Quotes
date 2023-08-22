import React from "react"
import classes from './preloader.module.css'


const Preloader = () => {
    return (
        <div className={classes.lds__ring}><div></div><div></div><div></div><div></div></div>
    )
};

export default Preloader;
