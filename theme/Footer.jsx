import React, {Component, PropTypes} from 'react';

export default class Footer extends Component {
  render() {
    const {post} = this.props;
    const repoURL = 'https://github.com/nju33/diz';

    return (
      <div className="footer__box">
        powerd by <a href={repoURL}>diz</a> © 2016 {post.root.config.title}
      </div>
    );
  }
}

// List.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.instanceOf(Post))
// };
