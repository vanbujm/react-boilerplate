import configureStore from 'redux-mock-store';
import createApolloClient from '../src/core/createApolloClient';

const mockStore = configureStore();
const initialState = {};
const store = mockStore(initialState);
const client = createApolloClient();

const context = {
  insertCss: () => {},
  fetch: () => {},
  store,
  pathname: '',
  client,
};

export default context;
