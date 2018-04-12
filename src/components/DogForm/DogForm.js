import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { compose, withHandlers, withState } from 'recompose';
import { camelCase } from 'lodash/string';
import s from './DogForm.css';

export class DogFormComponent extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  };

  render() {
    const { onSubmit, onChange, name, breed } = this.props;
    return (
      <form onSubmit={onSubmit} className={s.root}>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={name} onChange={onChange} />
        </label>
        <label htmlFor="breed">
          Breed:
          <input id="breed" type="text" value={breed} onChange={onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const handlerFunctions = {
  onSubmit: () => e => {
    e.preventDefault();
  },

  onChange: props => e => {
    const updateFunction = camelCase(`update ${e.target.id}`);
    props[updateFunction](e.target.value);
  },
};

export default compose(
  withState('name', 'updateName', ''),
  withState('breed', 'updateBreed', ''),
  withHandlers(handlerFunctions),
  withStyles(s),
)(DogFormComponent);
