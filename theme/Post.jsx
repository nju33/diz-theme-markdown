import React, {Component, PropTypes} from 'react';

export default class Post extends Component {
  render() {
    const {post} = this.props;
    const {directory} = post;
    const {page} = post.data;

    const prev = directory.posts[page - 2];
    const next = directory.posts[page];

    const prevElem = (() => {
      if (prev) {
        return (
          <a className="pager__link" href={prev.url}>{prev.data.title}</a>
        );
      }
      return <a className="pager__link"></a>;
    })();

    const nextElem = (() => {
      if (next) {
        return (
          <a className="pager__link" href={next.url}>{next.data.title}</a>
        );
      }
      return <a className="pager__link"></a>;
    })();

    return (
      <div className="post__box">
        <header className="post__header">
          <h2 className="post__title">{post.data.title}</h2>
        </header>
        <div className="post__contents markdown"
          dangerouslySetInnerHTML={{__html: post.contents}}></div>
        <footer className="post__footer">
          <div className="pager__box">
            {prevElem}
            {nextElem}
          </div>
        </footer>
      </div>
    );
  }
}

// Post.propTypes = {
//   title: PropTypes.string.isRequired,
//   contents: PropTypes.string.isRequired
// };
