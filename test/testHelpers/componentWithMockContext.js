import React from 'react';
import App from '../../src/components/App';
import context from '../mockContext';

const componentWithMockContext = optionalContext => ComponentToTest => (
  <App context={{ ...context, ...optionalContext }}>{ComponentToTest}</App>
);

export default componentWithMockContext;
