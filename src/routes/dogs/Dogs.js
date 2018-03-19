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
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import DogsQuery from './dogs.graphql';
import s from './Dogs.css';

export class DogsComponent extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      dogs: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          breed: PropTypes.string.isRequired,
          isGoodDog: PropTypes.string.isRequired,
        }),
      ),
    }),
  };

  render() {
    const dogMapper = dog => {
      const { id, name, breed, isGoodDog } = dog;
      return (
        <div key={id}>
          <h3>Name: {name}</h3>
          <p className={s.subCategory}>Breed: {breed}</p>
          <p className={s.subCategory}>Is a good dog?: {isGoodDog}</p>
        </div>
      );
    };
    const dogs = this.props.data.dogs
      ? this.props.data.dogs.map(dogMapper)
      : null;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Dogs</h1>
          {dogs}
        </div>
      </div>
    );
  }
}

DogsComponent.defaultProps = {
  data: {
    dogs: [],
  },
};

export default compose(graphql(DogsQuery), withStyles(s))(DogsComponent);
