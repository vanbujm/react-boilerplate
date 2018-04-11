import configureStore from 'redux-mock-store';
import componentWithMockContext from './componentWithMockContext';

export const helperMethods = {
  componentWithMockContext,
};

export const createMockStore = initialState => {
  const mockStore = configureStore();
  return mockStore(initialState);
};

export { componentWithMockContext };

export default helperMethods;
