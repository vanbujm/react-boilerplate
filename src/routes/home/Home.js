/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { retrieveReactNews } from '../../actions/news';
import s from './Home.css';

export class Home extends React.Component {
  static propTypes = {
    retrieveReactNews: PropTypes.func.isRequired,
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ),
  };

  componentDidMount() {
    this.props.retrieveReactNews();
  }

  render() {
    const renderedNews = Array.isArray(this.props.news)
      ? this.props.news.map(item => (
          <article key={item.link} className={s.newsItem}>
            <h1 className={s.newsTitle}>
              <a href={item.link}>{item.title}</a>
            </h1>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))
      : null;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          {renderedNews}
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  news: [],
};

const mapStateToProps = store => ({
  news: store.news.reactNews,
});
const mapDispatchToProps = {
  retrieveReactNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(Home),
);
