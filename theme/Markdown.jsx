import React, {Component} from 'react';
import omitBy from 'lodash.omitby';
import isNull from 'lodash.isnull';
// import Breadcrumb from './Breadcrumb.jsx';
// import Sidebar from './Sidebar.jsx';
import MiniBox from './MiniBox.jsx';
import List from './List.jsx';
import Post from './Post.jsx';
import Footer from './Footer.jsx';

export default class Minimalist extends Component{
  getContent(post) {
    switch (post.type) {
      case 'LIST': {
        return List;
      }
      case 'POST': {
        return Post;
      }
      default: {
        return Post;
      }
    }
  }

  // buildBreadcrumb(post) {
  //   const itemListElement = [];
  //   itemListElement.push({
  //     '@type': 'ListItem',
  //     position: 1,
  //     item: omitBy({
  //       '@id': post.root.absURL || null,
  //       name: 'home',
  //       image: post.data.image || null
  //     }, isNull)
  //   });
  //
  //   itemListElement.push({
  //     '@type': 'ListItem',
  //     position: 2,
  //     item: omitBy({
  //       '@id': post.directory.name || 'list',
  //       name: post.directory.name || 'list'
  //     }, isNull)
  //   });
  //
  //   if (post.data.title || post.data.page > 1) {
  //     itemListElement.push({
  //       '@type': 'ListItem',
  //       position: 3,
  //       item: omitBy({
  //         '@id': post.absURL || null,
  //         name: post.data.title || post.data.page,
  //         image: post.data.iamge || null
  //       }, isNull)
  //     });
  //   }
  //
  //   return {
  //     '@context': 'http://schema.org',
  //     '@type': 'BreadcrumbList',
  //     itemListElement
  //   };
  // }

  render() {
    const {type, post} = this.props;
    const Content = this.getContent(post);

    return (
      <div className="container">
        {/* <Sidebar post={post}/> */}
        <main id="main" className="main">
          <div className="contents">
            {/* <Breadcrumb breadcrumb={this.buildBreadcrumb(post)}/> */}
            <Content post={post}/>
            <MiniBox post={post}/>
          </div>
          <Footer post={post}/>
        </main>
      </div>
    );
  }
}
