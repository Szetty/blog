import React from 'react'
import ReactImage from '../assets/react.png'
import ElmImage from '../assets/elm.png'
import Paper from 'material-ui/Paper'
import colors from '../../../../../styles/variables/colors.scss'
import { Grid, Image } from 'semantic-ui-react'
import './TechnologiesView.scss'

const technologies = [
  { key: 0, name: 'React', image: ReactImage },
  { key: 1, name: 'Elm'  , image: ElmImage   },
  { key: 2, name: 'Elixir' },
  { key: 3, name: 'Python' }
]

export const TechnologiesView = () => (
  <div>
    {technologies.map(technology =>
      (
        <Paper key={technology.key} style={buildPaperStyle(technology)} zDepth={5}>
          <div style={{ padding: '25px 35px' }}>
            <h1>{technology.name}</h1>
            <Grid columns={2}>
              { (technology.key % 2 === 0) ? leftAlignedRow(technology) : rightAlignedRow(technology) }
            </Grid>
          </div>
        </Paper>
      )
    )}
  </div>
)

const leftAlignedRow = (technology) => (
  <Grid.Row>
    {imageColumn(technology)}
    {textColumn(technology)}
  </Grid.Row>
)

const rightAlignedRow = (technology) => (
  <Grid.Row>
    {textColumn(technology)}
    {imageColumn(technology)}
  </Grid.Row>
)

const imageColumn = (technology) => (
  <Grid.Column width={2}>
    {(technology.image) ? (<Image style={imageStyle} src={technology.image} />) : null}
  </Grid.Column>
)

const textColumn = (technology) => (
  <Grid.Column width={14}>
    sdfdsfds
  </Grid.Column>
)

const buildPaperStyle = (technology) => {
  if (technology.key % 2 === 0) {
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

export default TechnologiesView
