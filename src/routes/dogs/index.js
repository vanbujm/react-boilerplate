import React from 'react';
import Dogs from './Dogs';
import Layout from '../../components/Layout';

function action() {
  return {
    title: 'Dogs',
    component: (
      <Layout>
        <Dogs />
      </Layout>
    ),
  };
}

export default action;
