import { withState, withHandlers, compose, mapProps } from 'recompose';
import { omit } from 'lodash/object';

const filterProps = props => omit(props, ['updateCss']);

export default (mapHandlersToProps, mapCssToProps) => {
  const { cssOnLeave, cssOnEnter, propName } = mapCssToProps;
  const handlerFunctions = {};
  handlerFunctions[mapHandlersToProps.onMouseEnter] = props => () => {
    props.updateCss(cssOnLeave);
  };

  handlerFunctions[mapHandlersToProps.onMouseLeave] = props => () => {
    props.updateCss(cssOnEnter);
  };
  return compose(
    withState(propName, 'updateCss', cssOnEnter),
    withHandlers(handlerFunctions),
    mapProps(filterProps),
  );
};
