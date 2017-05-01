import React, { Component } from 'react'
import './Header.scss'
import MediaQueryWrapper, { MediaQueryTypes } from '../../components/MediaQueryWrapper'
import MobileHeader from './mobile/MobileHeader'
import MobileMenu from './mobile/MobileMenu'
import MenuWrapper from './menu/MenuWrapper'
import BreadcrumbWrapper from './breadcrumb/BreadcrumbWrapper'

export default class Header extends Component {
  constructor (props, context) {
    super(props, context)
    this.router = this.context.router
  }
  state = {
    isMobileMenuTriggered: false
  }
  toggleMenu = (e) => {
    this.state.isMobileMenuTriggered = !this.state.isMobileMenuTriggered
    if (e) {
      e.preventDefault()
    }
    this.forceUpdate()
  }
  render () {
    return (
      <div style={headerStyle}>
        <MediaQueryWrapper type={MediaQueryTypes.mobile_and_tablet}>
          <MobileHeader
            toggleMenu={this.toggleMenu}
            searchClassName='mobile-search'
          />
          <MobileMenu toggleMenu={this.toggleMenu} show={this.state.isMobileMenuTriggered} />
        </MediaQueryWrapper>
        <MediaQueryWrapper type={MediaQueryTypes.desktop}>
          <MenuWrapper className='header-background desktop-header' searchClassName='desktop-search' />
        </MediaQueryWrapper>
        {(this.router.routes.filter(route => route.path).length > 1) ? (
          <MediaQueryWrapper type={MediaQueryTypes.tablet_and_desktop}>
            <BreadcrumbWrapper />
          </MediaQueryWrapper>
        ) : null }
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
}

const headerStyle = {
  position: 'fixed',
  width: '100%',
  zIndex: '32'
}
