import React from 'react';
import App from '../../src/components/App';
import context from '../mockContext';

const componentWithMockContext = optionalContext => ComponentToTest => (
  <App context={optionalContext || context}>{ComponentToTest}</App>
);

export default componentWithMockContext;
