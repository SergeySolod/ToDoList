import React, { Fragment } from 'react';

import Todo from './todo/todo';
import Title from './title/title';

const TD = () => (
  <Fragment>
    <Title title="ToDo List" />
    <Todo />
  </Fragment>
);

export default TD;
