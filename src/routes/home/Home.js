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
import { compose, mapProps } from 'recompose';
import { omit } from 'lodash/object';
import { connect } from 'react-redux';
import { isFunction } from 'lodash/lang';
import { requestReactNews } from '../../actions/news';
import Loading from '../../components/Loading';
import News from '../../components/News';
import s from './Home.css';

const { withLoadingComponent } = Loading;

export class HomeComponent extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ),
  };

  render() {
    const news =
      this.props.news !== undefined ? <News news={this.props.news} /> : null;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          {news}
        </div>
      </div>
    );
  }
}

HomeComponent.defaultProps = {
  news: undefined,
};

const testFunction = props => {
  const shouldRenderLoadingComponent =
    props.loading === true || props.loading === undefined;

  const isRenderingOnBrowserAndHasActionTrigger =
    isFunction(props.actionTrigger) &&
    props.loading === undefined &&
    process.env.BROWSER;

  if (isRenderingOnBrowserAndHasActionTrigger) {
    props.actionTrigger();
  }
  return shouldRenderLoadingComponent;
};

const filterProps = props => omit(props, ['loading', 'actionTrigger']);

const mapStateToProps = store => ({
  loading: store.news.loading,
  news: store.news.reactNews,
});

const mapDispatchToProps = {
  actionTrigger: requestReactNews,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingComponent(testFunction),
  mapProps(filterProps),
  withStyles(s),
)(HomeComponent);
