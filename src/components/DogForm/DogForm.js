import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { compose, withHandlers, withState } from 'recompose';
import { camelCase, capitalize } from 'lodash/string';
import s from './DogForm.css';

export const formFields = ['name', 'breed'];

const formPropTypes = Object.assign(
  ...formFields.map(field => ({
    [field]: PropTypes.string.isRequired,
  })),
);

export const createUpdateFunction = functionName =>
  camelCase(`update ${functionName}`);

const formUpdateFunctionPropTypes = Object.assign(
  ...formFields.map(field => ({
    [createUpdateFunction(field)]: PropTypes.func.isRequired,
  })),
);

export class DogFormComponent extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    ...formPropTypes,
    ...formUpdateFunctionPropTypes,
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

const handlerFunctions = {
  onSubmit: () => e => e.preventDefault(),
  onChange: props => e =>
    props[createUpdateFunction(e.target.id)](e.target.value),
};

export default compose(
  ...formFields.map(field => withState(field, createUpdateFunction(field), '')),
  withHandlers(handlerFunctions),
  withStyles(s),
)(DogFormComponent);
