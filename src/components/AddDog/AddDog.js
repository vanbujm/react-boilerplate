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
import { compose, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusHexagon from '@fortawesome/fontawesome-pro-light/faPlusHexagon';
import { connect } from 'react-redux';
import { showDogForm } from '../../actions/dogs';
import s from './AddDog.css';
import withHover from '../withHover';

export class AddDogComponent extends React.PureComponent {
  static propTypes = {
    fontAwesomeClass: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  render() {
    const {
      onClick,
      onKeyPress,
      onMouseEnter,
      onMouseLeave,
      fontAwesomeClass,
    } = this.props;
    return (
      <div
        className={s.plusBox}
        onClick={onClick}
        onKeyPress={onKeyPress}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="button"
        tabIndex="0"
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

const handleAddDog = props => props.showDogForm();

const handlerFunctions = {
  onClick: props => e => {
    e.preventDefault();
    handleAddDog(props);
  },
  onKeyPress: props => e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddDog(props);
    }
  },
};

const mapDispatchToProps = {
  showDogForm,
};

export default compose(
  connect(null, mapDispatchToProps),
  withHover(mapHandlersToProps, mapCssToProps),
  withHandlers(handlerFunctions),
  withStyles(s),
)(AddDogComponent);
