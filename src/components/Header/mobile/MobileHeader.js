import React from 'react'
import AppBar from 'material-ui/AppBar'
import { Search } from 'semantic-ui-react'
import { PAGE_NAME_BY_PATH } from '../../../store/pages'
import './Mobile.scss'

const titleStyle = {
  flex: '0 0 auto'
}

export const MobileHeader = ({ toggleMenu, searchClassName }, { store }) => (
  <AppBar
    className='header-background'
    onLeftIconButtonTouchTap={toggleMenu}
    iconElementRight={<Search className={searchClassName} />}
    title={PAGE_NAME_BY_PATH[store.getState().location.pathname]}
    titleStyle={titleStyle}
  />
)

MobileHeader.propTypes = {
  toggleMenu : React.PropTypes.func.isRequired,
  searchClassName: React.PropTypes.string
}

MobileHeader.contextTypes = {
  store: React.PropTypes.object
}

export default MobileHeader
