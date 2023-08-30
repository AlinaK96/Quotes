import React from "react"

const ToolTip = ({item}) => {
    return (
        <div className="tooltip">
            <span >{item.quote}</span>
            <hr />
            <span>{item.author}</span>
        </div>
        
    )
};

export default ToolTip;
