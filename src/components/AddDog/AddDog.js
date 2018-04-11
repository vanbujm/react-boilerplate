/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusHexagon from '@fortawesome/fontawesome-pro-light/faPlusHexagon';
import s from './AddDog.css';
import withHover from '../withHover';

class AddDog extends React.Component {
  static propTypes = {
    fontAwesomeClass: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  };

  render() {
    const { onMouseEnter, onMouseLeave, fontAwesomeClass } = this.props;

    return (
      <div
        className={s.plusBox}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <FontAwesomeIcon icon={faPlusHexagon} size={fontAwesomeClass} />
      </div>
    );
  }
}

const mapHandlersToProps = {
  onMouseEnter: 'onMouseEnter',
  onMouseLeave: 'onMouseLeave',
};

const mapCssToProps = {
  cssOnEnter: '2x',
  cssOnLeave: '3x',
  propName: 'fontAwesomeClass',
};

export default compose(
  withStyles(s),
  withHover(mapHandlersToProps, mapCssToProps),
)(AddDog);
