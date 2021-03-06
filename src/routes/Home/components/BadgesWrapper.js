import React from 'react'
import ReactImage from '../assets/react.png'
import ReduxImage from '../assets/redux.png'
import SemanticUiReactImage from '../assets/semantic-ui-react.png'
import SassImage from '../assets/sass.png'
import MaterialUiImage from '../assets/material-ui.png'
import Badge from 'material-ui/Badge'
import './HomeView.scss'
import { Image } from 'semantic-ui-react'
import colors from '../../../styles/variables/colors.scss'
import MediaQueryTypes from '../../../components/MediaQueryWrapper/MediaQueryTypes'
import MediaQueryWrapper from '../../../components/MediaQueryWrapper/MediaQueryWrapper'
import MediaQuery from 'react-responsive'

const badgeStyle = {
  background: 'none',
  width: '100px',
  top: '5px',
  right: '17px'
}

const reduxBadgeStyle = {
  background: 'none',
  width: '100px',
  top: '70px',
  right: '20px'
}

const semanticUiBadgeStyle = {
  background: 'none',
  width: '100px',
  top: '5px',
  right: '5px'
}

const textStyle = {
  fontSize: '42px',
  color: colors.tangerine,
  position: 'relative',
  right: '80px'
}

const reactContainerStyle = {
  position: 'absolute',
  left: '280px',
  top: '100px'
}

const reduxContainerStyle = {
  position: 'absolute',
  left: '80px',
  top: '300px'
}

const reactMobileContainerStyle = {
  position: 'absolute',
  left: '100px',
  top: '120px'
}

const reduxMobileContainerStyle = {
  position: 'absolute',
  left: '100px',
  bottom: '20px'
}

const materialUiContainerStyle = {
  position: 'absolute',
  right: '0px',
  top: '300px'
}

const semanticUiReactContainerStyle = {
  position: 'absolute',
  right: '0',
  top:'120px'
}

const sassImageStyle = {
  position: 'absolute',
  right: '20px',
  bottom: '50px',
  width: '250px'
}

export const BadgesWrapper = () => (
  <div>
    <MediaQuery minWidth={1600} minHeight={700}>
      <Badge
        badgeContent={<Image src={ReactImage} />}
        badgeStyle={badgeStyle}
        style={reactContainerStyle}
      >
        <h1 style={textStyle}>
          REACT
        </h1>
      </Badge>
      <Badge
        badgeContent={<Image src={ReduxImage} />}
        badgeStyle={reduxBadgeStyle}
        style={reduxContainerStyle}
      >
        <h1 style={textStyle}>
          REDUX
        </h1>
      </Badge>
      <Image src={SassImage} style={sassImageStyle} />
      <Badge
        badgeContent={<Image src={MaterialUiImage} />}
        badgeStyle={badgeStyle}
        style={materialUiContainerStyle}
      >
        <h1 style={textStyle}>
          MATERIAL UI
        </h1>
      </Badge>
      <Badge
        badgeContent={<Image src={SemanticUiReactImage} />}
        badgeStyle={semanticUiBadgeStyle}
        style={semanticUiReactContainerStyle}
      >
        <h1 style={textStyle}>
          SEMANTIC UI REACT
        </h1>
      </Badge>
    </MediaQuery>
    <MediaQueryWrapper type={MediaQueryTypes.small}>
      <Badge
        badgeContent={<Image src={ReactImage} />}
        badgeStyle={badgeStyle}
        style={reactMobileContainerStyle}
      >
        <h1 style={textStyle}>
          REACT
        </h1>
      </Badge>
      <Badge
        badgeContent={<Image src={ReduxImage} />}
        badgeStyle={reduxBadgeStyle}
        style={reduxMobileContainerStyle}
      >
        <h1 style={textStyle}>
          REDUX
        </h1>
      </Badge>
    </MediaQueryWrapper>
  </div>
)

export default BadgesWrapper
