import React, {Component, PropTypes} from 'react';

export default class Breadcrumb extends Component {
  render() {
    const {breadcrumb} = this.props;

    return (
      <div className="breadcrumb__box">
        <ul className="breadcrumb__list">
          {breadcrumb.itemListElement.map((elem, idx) => {
            if (/^\//.test(elem.item['@id'])) {
              return (
                <li key={idx} className="breadcrumb__item">
                  <a className="breadcrumb__link" href={elem.item['@id']}>
                    {elem.item.name}
                  </a>
                </li>
              );
            }
            return (
              <li key={idx} className="breadcrumb__item">
                <a className="breadcrumb__link">{elem.item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}
