import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { compose, withHandlers, withState } from 'recompose';
import { camelCase, capitalize } from 'lodash/string';
import s from './DogForm.css';

const formFields = ['name', 'breed'];

export class DogFormComponent extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    ...Object.assign(
      {},
      ...formFields.map(field => {
        const obj = {};
        obj[field] = PropTypes.string.isRequired;
        return obj;
      }),
    ),
  };

  render() {
    const { onSubmit, onChange } = this.props;
    const textInputs = formFields.map(field => (
      <label htmlFor={field} key={field}>
        {capitalize(field)}:
        <input
          id={field}
          type="text"
          value={this.props[field]}
          onChange={onChange}
        />
      </label>
    ));
    return (
      <form onSubmit={onSubmit} className={s.root}>
        {textInputs}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const createUpdateFunction = functionName =>
  camelCase(`update ${functionName}`);

const handlerFunctions = {
  onSubmit: () => e => {
    e.preventDefault();
  },

  onChange: props => e => {
    const updateFunction = createUpdateFunction(e.target.id);
    props[updateFunction](e.target.value);
  },
};

export default compose(
  ...formFields.map(field => withState(field, createUpdateFunction(field), '')),
  withHandlers(handlerFunctions),
  withStyles(s),
)(DogFormComponent);
