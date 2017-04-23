import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { PAGE_NAME_BY_PATH } from '../../../store/pages'
import './BreadcrumpWrapper.scss'

export default class BreadcrumbWrapper extends Component {
  constructor (props, context) {
    super(props, context)
    this.router = this.context.router
  }
  buildSections = () => {
    let sections = this.router.routes.map(route => {
      return {
        key: PAGE_NAME_BY_PATH[route.path],
        content: PAGE_NAME_BY_PATH[route.path],
        link: true
      }
    })
    sections[sections.length - 1].link = false
    sections[sections.length - 1].active = true
    return sections
  }
  render () {
    return (
      <div style={breadcrumbContainerStyle} className='background'>
        <Breadcrumb icon='right chevron' sections={this.buildSections()} />
      </div>
    )
  }
}

const breadcrumbContainerStyle = {
  width: '100%',
  height: '3vh'
}

BreadcrumbWrapper.contextTypes = {
  router: React.PropTypes.object
}
