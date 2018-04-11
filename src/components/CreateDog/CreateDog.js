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
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './CreateDog.css';
import HideDogButton from '../HideDogButton';

class CreateDog extends React.Component {
  static propTypes = {
    showForm: PropTypes.bool.isRequired,
  };

  render() {
    const { showForm } = this.props;
    const showFormCss = showForm ? '' : s.hide;
    return (
      <div className={cx(s.root, showFormCss)}>
        DOG FORM
        <HideDogButton />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  showForm: store.dogs.showDogForm,
});

export default compose(connect(mapStateToProps), withStyles(s))(CreateDog);
