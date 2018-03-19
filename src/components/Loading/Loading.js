import { branch, renderComponent } from 'recompose';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loading.css';

export class LoadingComponent extends React.Component {
  render() {
    return <div className={s.loader} />;
  }
}

const withLoadingComponent = testFunction =>
  branch(testFunction, renderComponent(withStyles(s)(LoadingComponent)));

export default { withLoadingComponent };
