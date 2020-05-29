import {actionTypes} from './types';
import {types} from '@babel/core';

const dummyAction = (data) => {
  console.log(`dummyAction: ${JSON.stringify(data)}`);
  return {
    type: actionTypes.DUMMY_STATE,
    payload: data,
  };
};

export default dummyAction;
