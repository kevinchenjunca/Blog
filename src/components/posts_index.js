import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectPost, deSelectPost } from '../actions/index';
import { Link } from 'react-router';
import SelectedPostList from './selected_posts_list';
import _ from "lodash";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  selectDeselectPost(post) {
    if (_.contains(this.props.selectedIds, post.id)) {
      this.props.deSelectPost(post.id);
    } else {
      this.props.selectPost(post.id);
    }
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id} >
            <input type="checkbox" onChange={this.selectDeselectPost.bind(this,post)}/>
            <Link to={"posts/" + post.id}>
                <span className="pull-xs-right">{post.categories}</span>
                <strong> {post.title}</strong>
            </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary" >
              Add a Post
          </Link>
        </div>
        <h3>Selected Post</h3>
          <SelectedPostList/>
        <hr/>
        <h3>All Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all, selectedIds: state.posts.selectedPostIds }
}

export default connect(mapStateToProps, {fetchPosts,selectPost,deSelectPost})(PostsIndex);
