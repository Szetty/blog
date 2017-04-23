import React, { Component } from 'react'
import { Dropdown, Menu, Search } from 'semantic-ui-react'
import { PAGES } from '../../../store/pages'
import './MenuWrapper.scss'

export default class MenuWrapper extends Component {
  constructor (props, context) {
    super(props, context)
    this.store = this.context.store
    this.router = this.context.router
    this.currentPath = this.store.getState().location.pathname
    this.store.subscribe(
      () => {
        let changedPath = this.store.getState().location.pathname
        if (changedPath && changedPath !== this.currentPath) {
          console.log(changedPath)
          this.currentPath = changedPath
        }
      }
    )
  }
  handleItemClick = (e, { name }) => {
    if (this.props.vertical) {
      this.props.toggleMenu()
    }
    this.router.push(name)
  }
  mapPage = (page) => (
    <Dropdown.Item
      key={page.name}
      name={page.path}
      active={this.currentPath === page.path}
      onClick={this.handleItemClick}
      text={page.name}
    />
  )
  render () {
    return (
      <Menu inverted
        vertical={this.props.vertical}
        className={this.props.className}
      >
        {PAGES.map((page) => {
          if (page.children.length > 0) {
            return (
              <Dropdown item text={page.name} key={page.name}>
                <Dropdown.Menu className='header-background'>
                  { page.children.map(this.mapPage) }
                </Dropdown.Menu>
              </Dropdown>
            )
          } else {
            return (
              <Menu.Item
                key={page.name}
                name={page.path}
                active={this.currentPath === page.path}
                onClick={this.handleItemClick}
              >
                {page.name}
              </Menu.Item>
            )
          }
        }
        )}
        {!this.props.vertical ? <Search className={this.props.searchClassName} /> : null}
      </Menu>
    )
  }
}

MenuWrapper.propTypes = {
  vertical : React.PropTypes.bool,
  className: React.PropTypes.string,
  searchClassName: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

MenuWrapper.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
}
