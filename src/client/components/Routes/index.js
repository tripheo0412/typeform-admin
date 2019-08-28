import React from 'react';
import { Route } from 'react-router-dom';
import QuestionForm from '../QuestionForm';

export default function Routes() {
  return (
    <main>
      <Route path="/" component={QuestionForm} />
    </main>
  );
}
