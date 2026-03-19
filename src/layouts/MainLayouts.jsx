import React from 'react'
import NavBar from '../Components/NavBar'


const MainLayouts = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default MainLayouts
