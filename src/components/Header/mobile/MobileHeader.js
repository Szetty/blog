import React from 'react'
import AppBar from 'material-ui/AppBar'
import { PAGE_NAME_BY_PATH } from '../../../store/pages'
import './Mobile.scss'
import MediaQueryWrapper, { MediaQueryTypes } from '../../MediaQueryWrapper'
import { Search } from 'semantic-ui-react'

export const MobileHeader = ({ toggleMenu, searchClassName }, { store }) => (
  <AppBar
    className='header-background'
    onLeftIconButtonTouchTap={toggleMenu}
    iconElementRight={
      <MediaQueryWrapper type={MediaQueryTypes.tablet}>
        <Search className={searchClassName} />
      </MediaQueryWrapper>
    }
    title={PAGE_NAME_BY_PATH[store.getState().location.pathname]}
    titleStyle={titleStyle}
  />
)

const titleStyle = {
  flex: '0 0 auto'
}

MobileHeader.propTypes = {
  toggleMenu : React.PropTypes.func.isRequired,
  searchClassName: React.PropTypes.string
}

MobileHeader.contextTypes = {
  store: React.PropTypes.object
}

export default MobileHeader
