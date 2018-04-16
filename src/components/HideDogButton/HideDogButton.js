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
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimesHexagon from '@fortawesome/fontawesome-pro-light/faTimesHexagon';
import s from './HideDogButton.css';
import { hideDogForm } from '../../actions/dogs';

export class HideDogButtonComponent extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
  };

  render() {
    const { onClick, onKeyPress } = this.props;
    return (
      <div className={s.hideButton}>
        <FontAwesomeIcon
          icon={faTimesHexagon}
          onClick={onClick}
          onKeyPress={onKeyPress}
          role="button"
          tabIndex="0"
        />
      </div>
    );
  }
}

const hideForm = props => {
  props.hideDogForm();
};

const handlerFunctions = {
  onClick: props => e => {
    e.preventDefault();
    hideForm(props);
  },
  onKeyPress: props => e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      hideForm(props);
    }
  },
};

const mapDispatchToProps = {
  hideDogForm,
};

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers(handlerFunctions),
  withStyles(s),
)(HideDogButtonComponent);
