import React from 'react'
import Paper from 'material-ui/Paper'
import colors from '../../../../../styles/variables/colors.scss'
import { Grid, Image } from 'semantic-ui-react'
import './TechnologiesView.scss'
import technologies from '../technologies'
import MediaQueryWrapper, { MediaQueryTypes } from '../../../../../components/MediaQueryWrapper'

export const TechnologiesView = () => (
  <div>
    {technologies.map((technology, index) =>
      (
        <Paper key={index} style={buildPaperStyle(technology, index)} zDepth={5}>
          <div style={{ padding: '25px 35px' }}>
            <h1>
              <a href={technology.link} target='_blank'>{technology.name}</a>
            </h1>
            <MediaQueryWrapper type={MediaQueryTypes.mobile}>
              {image(technology, (index % 2 === 0))}
            </MediaQueryWrapper>
            <MediaQueryWrapper type={MediaQueryTypes.tablet}>
              {text(technology)}
            </MediaQueryWrapper>
            <MediaQueryWrapper type={MediaQueryTypes.desktop}>
              <Grid stackable columns={2}>
                { (index % 2 === 0) ? leftAlignedRow(technology) : rightAlignedRow(technology) }
              </Grid>
            </MediaQueryWrapper>
          </div>
        </Paper>
      )
    )}
  </div>
)

const leftAlignedRow = (technology) => (
  <Grid.Row>
    {imageColumn(technology, true)}
    {textColumn(technology)}
  </Grid.Row>
)

const rightAlignedRow = (technology) => (
  <Grid.Row>
    {textColumn(technology)}
    {imageColumn(technology, false)}
  </Grid.Row>
)

const imageColumn = (technology, isLeft) => (
  <Grid.Column width={2}>
    {image(technology, isLeft)}
  </Grid.Column>
)

const textColumn = (technology) => (
  <Grid.Column width={14}>
    {text(technology)}
  </Grid.Column>
)

const image = (technology, isLeft) => {
  const floatStyle = (isLeft) ? 'left' : 'right'
  return (
    <Image style={{ float: floatStyle, ...imageStyle }} src={technology.image} />
  )
}

const text = (technology) => (
  <p style={textStyle}>{technology.text}</p>
)

const buildPaperStyle = (technology, index) => {
  if (index % 2 === 0) {
    return leftStyle
  } else {
    return rightStyle
  }
}

const leftStyle = {
  height: '45vh',
  width: '100%',
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: colors.tangerine
}

const rightStyle = {
  height: '45vh',
  width: '100%',
  textAlign: 'right',
  display: 'inline-block',
  backgroundColor: colors.gold,
  float: 'right'
}

const imageStyle = {
  width: '30vh',
  maxHeight: '25vh'
}

const textStyle = {
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '2vmin'
}

export default TechnologiesView
