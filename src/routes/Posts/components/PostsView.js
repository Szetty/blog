import React, { Component } from 'react'
import './PostsView.scss'
import { Button, Comment, Form, Header, Embed } from 'semantic-ui-react'
import VideoPlaceHolder from '../assets/videoPlaceHolder.png'

export default class PostsView extends Component {
  constructor (props, context) {
    super(props, context)
    this.posts = this.props.posts
    this.addComment = this.props.add
    this.store = this.context.store
    this.store.subscribe(this.update)
  }
  state = {
    newComment: ''
  }
  commentChanged = (e, data) => {
    this.setState({ newComment: data.value })
    e.preventDefault()
  }
  addNewComment = (e) => {
    this.addComment(this.state.newComment)
    this.setState({ newComment: '' })
    if (e) {
      e.preventDefault()
    }
    this.forceUpdate()
  }
  update = () => { this.posts = this.store.getState().posts }
  render () {
    return (
      <div>
        <Embed
          id='6s-YIihbcjs'
          placeholder={VideoPlaceHolder}
          source='youtube'
        />
        <Comment.Group>
          <Header as='h3' dividing>Comments</Header>

          {this.posts.map((post, postIndex) => (
            <Comment key={postIndex}>
              <Comment.Avatar src={post.avatar} />
              <Comment.Content>
                <Comment.Author as='a'>{post.author}</Comment.Author>
                <Comment.Metadata>
                  {post.metadata.map((metadataElement, index) => (
                    <div key={index}>{metadataElement}</div>
                  ))}
                </Comment.Metadata>
                <Comment.Text>
                  {post.comment}
                </Comment.Text>
              </Comment.Content>
            </Comment>
          ))}

          <Form reply onSubmit={e => e.preventDefault()}>
            <Form.TextArea onChange={this.commentChanged} value={this.state.newComment} />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={this.addNewComment} />
          </Form>
        </Comment.Group>
      </div>
    )
  }
}

PostsView.propTypes = {
  posts: React.PropTypes.array.isRequired,
  add  : React.PropTypes.func.isRequired
}

PostsView.contextTypes = {
  store: React.PropTypes.object
}
