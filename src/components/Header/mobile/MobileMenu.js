import React from 'react'
import './Mobile.scss'
import MenuWrapper from '../menu/MenuWrapper'

export const MobileMenu = ({ show, toggleMenu }) => {
  if (show) {
    return (
      <MenuWrapper vertical
        className='mobile-menu header-background'
        toggleMenu={toggleMenu}
      />
    )
  } else {
    return null
  }
}

MobileMenu.propTypes = {
  show : React.PropTypes.bool.isRequired,
  toggleMenu: React.PropTypes.func.isRequired
}

export default MobileMenu
