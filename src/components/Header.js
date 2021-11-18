import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'
function Header({title ,onAdd,isAddShow}) {
    return (
        
        <div className="header-container">
        <header className='header'>
           <h1>{title}</h1>
           
           <Button color={isAddShow?'lightBlue':'#4796E5'} text={isAddShow?'Close':'Add'} onClick={onAdd}/>
        </header>
        <h6>Add new To-Do</h6>
        </div>
        
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

//Css in js 
// const headingStyling={
//     color:"red",
//     backgroundColor:"black"
// }

export default Header
