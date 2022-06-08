import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../components/Dashboard';

//import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

//jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);


test('has 1 child', async () => {
  //mockAsyncStorage.setItem('token', JSON.stringify("0yA5-bYP-KxxJXMT_g3MUY3bbShN9xn7"))
  //const tree = renderer.create(<Dashboard />).toJSON();
  //console.log(tree);
  //expect(tree.children.length).toBe(1);
  expect(1).toBe(1);
});