import React, { Component } from 'react'
import './Header.scss'
import MediaQuery from 'react-responsive'
import MobileHeader from './mobile/MobileHeader'
import MobileMenu from './mobile/MobileMenu'
import MenuWrapper from './menu/MenuWrapper'
import { MEDIA_QUERIES } from '../../store/constants'
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
        <MediaQuery query={MEDIA_QUERIES.tablet}>
          <MobileHeader
            toggleMenu={this.toggleMenu}
            searchClassName='mobile-search'
          />
          <MobileMenu toggleMenu={this.toggleMenu} show={this.state.isMobileMenuTriggered} />
        </MediaQuery>
        <MediaQuery query={MEDIA_QUERIES.desktop}>
          <MenuWrapper className='header-background desktop-header' searchClassName='desktop-search' />
          {(this.router.routes.filter(route => route.path).length > 1) ? (<BreadcrumbWrapper />) : null }
        </MediaQuery>
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
