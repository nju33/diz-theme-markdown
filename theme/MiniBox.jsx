import React, {Component, PropTypes} from 'react';

export default class MiniBox extends Component {
  render() {
    const {post} = this.props;

    const postElements = (post.data.items || []).map((post, idx) => {
      return (
        <li key={idx} className="minibox__item">
          <a className="minibox__link" href={post.url}>{post.data.title}</a>
        </li>
      );
    });

    return (
      <div className="minibox__box">
        <ul className="minibox__items">
          {postElements}
        </ul>
      </div>
    );
  }
}
