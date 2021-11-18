import React from 'react'
// import PropTypes from 'prop-types';
const Button = ({text,color,onClick}) => {
    // const onClick=()=>{
    //     console.log("btn clicked")
    // }
    return <button onClick={onClick} className="btn" style={{background:color}}>{text}</button>
}
Button.defaultProp={
    color:'Black',
}

export default Button
