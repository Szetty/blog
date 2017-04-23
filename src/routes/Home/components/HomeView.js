import React from 'react'
import Arnold from '../assets/Arnold.jpg'
import Text from '../assets/text1.txt'
import './HomeView.scss'
import { Card, Grid, Image, Segment } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import { MEDIA_QUERIES } from '../../../store/constants'
import BadgesWrapper from './BadgesWrapper'

export const HomeView = () => (
  <div>
    <MediaQuery query={MEDIA_QUERIES.desktop}>
      <BadgesWrapper />
    </MediaQuery>
    <section style={sectionStyle}>
      <Card className='card'>
        <Image src={Arnold} />
        <Card.Content>
          <Card.Header>
            Arnold Szederjesi
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Born in 1993
            </span>
          </Card.Meta>
          <Card.Description>
            Arnold is a programmer living in Cluj-Napoca.
          </Card.Description>
        </Card.Content>
      </Card>
    </section>
    <section style={sectionStyle}>
      <div className='home-grid'>
        <h1>Why to blog?</h1>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment className='segment'>
              {Text}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className='segment'>
              {Text}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </section>
  </div>
)

export default HomeView

const sectionStyle = {
  height: '93vh'
}
