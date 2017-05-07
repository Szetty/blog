import { connect } from 'react-redux'
import { add } from '../store/posts'
import Posts from '../components/PostsView'

const mapDispatchToProps = {
  add
}

const mapStateToProps = (state) => (
  {
    posts : state.posts
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
