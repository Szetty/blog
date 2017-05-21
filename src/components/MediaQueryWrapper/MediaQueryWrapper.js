import React from 'react'
import MediaQuery from 'react-responsive'
import MediaQueryTypes from './MediaQueryTypes'
import breakPoints from '../../styles/variables/media.scss'

const MediaQueryWrapper = ({ type, children }) => {
  switch (type) {
    case MediaQueryTypes.mobile:
      return (
        <MediaQuery maxWidth={breakPoints.mobileMaxWidth}>
          {children}
        </MediaQuery>
      )
    case MediaQueryTypes.tablet:
      return (
        <MediaQuery minWidth={breakPoints.tabletMinWidth} maxWidth={breakPoints.tabletMaxWidth}>
          {children}
        </MediaQuery>
      )
    case MediaQueryTypes.mobile_and_tablet:
      return (
        <MediaQuery maxWidth={breakPoints.tabletMaxWidth}>
          {children}
        </MediaQuery>
      )
    case MediaQueryTypes.desktop:
      return (
        <MediaQuery minWidth={breakPoints.desktopMinWidth}>
          {children}
        </MediaQuery>
      )
    case MediaQueryTypes.tablet_and_desktop:
      return (
        <MediaQuery minWidth={breakPoints.tabletMinWidth}>
          {children}
        </MediaQuery>
      )
    case MediaQueryTypes.small:
      return (
        <MediaQuery maxWidth={320}>
          {children}
        </MediaQuery>
      )
  }
}

MediaQueryWrapper.propTypes = {
  type  : React.PropTypes.number.isRequired,
  children : React.PropTypes.any.isRequired
}

export default MediaQueryWrapper
