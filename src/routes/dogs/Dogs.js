/* eslint-disable css-modules/no-undef-class */
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
import cx from 'classnames';
import DogsQuery from './dogs.graphql';
import s from './Dogs.css';
import AddDog from '../../components/AddDog';
import CreateDog from '../../components/CreateDog';

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
        <section key={id} className={s.dog}>
          <h3>{name}</h3>
          <p className={s.subCategory}>
            Breed: <span className={s.answer}>{breed}</span>
          </p>
          <p className={s.subCategory}>
            Is a good dog?:{' '}
            <span className={cx(s.answer, isGoodDog ? s.yes : s.no)}>
              {isGoodDog}
            </span>
          </p>
        </section>
      );
    };
    const dogs = this.props.data.dogs
      ? this.props.data.dogs.map(dogMapper)
      : null;
    return (
      <div className={s.root}>
        <article className={s.container}>
          <div className={s.row}>
            <h1>Dogs</h1>
            <AddDog />
            <CreateDog />
          </div>
          <div className={s.dogContainer}>{dogs}</div>
        </article>
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
