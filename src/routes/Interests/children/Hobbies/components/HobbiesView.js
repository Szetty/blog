import React from 'react'
import { Header, Rating, Table, Item } from 'semantic-ui-react'
import HobbiesJson from '../assets/hobbies.json'
import MediaQueryWrapper, { MediaQueryTypes } from '../../../../../components/MediaQueryWrapper'
import { Subheader } from 'material-ui'
import './HobbiesView.scss'

export const HobbiesView = () => (
  <div style={hobbiesStyle}>
    <MediaQueryWrapper type={MediaQueryTypes.mobile}>
      {mobileView}
    </MediaQueryWrapper>
    <MediaQueryWrapper type={MediaQueryTypes.tablet_and_desktop}>
      {desktopView}
    </MediaQueryWrapper>
  </div>
)

const rating = (hobby) => (
  <Rating icon='star' defaultRating={hobby.rating} maxRating={HobbiesJson.maxRating} disabled />
)

const mobileView = (
  <Item.Group divided items={
    HobbiesJson.hobbies.map((hobby, index) =>
      ({
        childKey: index,
        header: hobby.name,
        meta: rating(hobby),
        description: (
          <div>
            <Subheader>{HobbiesJson.watchMobileHeader}</Subheader>
            <div>{hobby.watch + '%'}</div>
            <Subheader>{HobbiesJson.doMobileHeader}</Subheader>
            <div>{hobby.do + '%'}</div>
          </div>
        )
      })
    )
  } />
)

const desktopView = (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        {HobbiesJson.headers.map((header, index) =>
          <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
        )}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {HobbiesJson.hobbies.map((hobby, index) => (
        <Table.Row key={index}>
          <Table.Cell>
            <Header as='h3'>{hobby.name}</Header>
          </Table.Cell>
          <Table.Cell positive={hobby.rating === HobbiesJson.maxRating} negative={hobby.rating === 1}>
            {rating(hobby)}
          </Table.Cell>
          <Table.Cell positive={hobby.watch >= 75} negative={hobby.watch <= 10}>
            {hobby.watch}%
          </Table.Cell>
          <Table.Cell positive={hobby.do >= 85} negative={hobby.do <= 5}>
            {hobby.do}%
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

const hobbiesStyle = {
  fontFamily: 'Ubuntu, Lato, Helvetica Neue, Arial, Helvetica, sans-serif',
  fontStyle: 'italic'
}

export default HobbiesView
