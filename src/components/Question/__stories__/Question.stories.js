// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Question from '..';

storiesOf('Question', module)
  .addDecorator(jsxDecorator)
  .add('Default', () => (
    <div>
      <Question
        _id="1"
        type="shottext"
        order={1}
        label=""
        choices={[]}
        showQuestionSetting={() => {}}
        onChoiceChangeHandler={() => {}}
        onTextChangeHandler={() => {}}
        onAddChoiceHandler={() => {}}
        onAddQuestionHandler={() => {}}
        onDuplicateQuestionHandler={() => {}}
        onDeleteQuestionHandler={() => {}}
        onAddPictureChoiceHandler={() => {}}
        onPictureChoiceChangeHandler={() => {}}
        onPictureButtonClickHandler={() => {}}
      />
      <Question
        _id="2"
        type="shottext"
        order={1}
        label=""
        choices={[]}
        showQuestionSetting={() => {}}
        onChoiceChangeHandler={() => {}}
        onAddChoiceHandler={() => {}}
        onTextChangeHandler={() => {}}
        onAddQuestionHandler={() => {}}
        onDuplicateQuestionHandler={() => {}}
        onDeleteQuestionHandler={() => {}}
        onAddPictureChoiceHandler={() => {}}
        onPictureChoiceChangeHandler={() => {}}
        onPictureButtonClickHandler={() => {}}
      />
    </div>
  ))
  .add('Required', () => (
    <>
      <Question
        _id="3"
        type="shottext"
        order={1}
        label=""
        choices={[]}
        showQuestionSetting={() => {}}
        onChoiceChangeHandler={() => {}}
        onTextChangeHandler={() => {}}
        onAddChoiceHandler={() => {}}
        onAddQuestionHandler={() => {}}
        onDuplicateQuestionHandler={() => {}}
        onDeleteQuestionHandler={() => {}}
        onAddPictureChoiceHandler={() => {}}
        onPictureChoiceChangeHandler={() => {}}
        onPictureButtonClickHandler={() => {}}
        isRequired
      />
      <Question
        _id="4"
        type="shottext"
        order={2}
        label=""
        choices={[]}
        showQuestionSetting={() => {}}
        onChoiceChangeHandler={() => {}}
        onTextChangeHandler={() => {}}
        onAddChoiceHandler={() => {}}
        onAddQuestionHandler={() => {}}
        onDuplicateQuestionHandler={() => {}}
        onDeleteQuestionHandler={() => {}}
        onAddPictureChoiceHandler={() => {}}
        onPictureChoiceChangeHandler={() => {}}
        onPictureButtonClickHandler={() => {}}
      />
    </>
  ))
  .add('multiple choice', () => (
    <Question
      _id="4"
      type="choicebox"
      order={1}
      showQuestionSetting={() => {}}
      isMultiplechoice
      onChoiceChangeHandler={() => {}}
      onAddChoiceHandler={() => {}}
      onTextChangeHandler={() => {}}
      choices={['react', 'redux', 'bal']}
      onAddQuestionHandler={() => {}}
      onDuplicateQuestionHandler={() => {}}
      onDeleteQuestionHandler={() => {}}
      onAddPictureChoiceHandler={() => {}}
      onPictureChoiceChangeHandler={() => {}}
      onPictureButtonClickHandler={() => {}}
    />
  ))
  .add('email type', () => (
    <Question
      _id="5"
      choices={[]}
      order={1}
      type="email"
      label=""
      showQuestionSetting={() => {}}
      onChoiceChangeHandler={() => {}}
      onAddChoiceHandler={() => {}}
      onTextChangeHandler={() => {}}
      onAddQuestionHandler={() => {}}
      onDuplicateQuestionHandler={() => {}}
      onDeleteQuestionHandler={() => {}}
      onAddPictureChoiceHandler={() => {}}
      onPictureChoiceChangeHandler={() => {}}
      onPictureButtonClickHandler={() => {}}
    />
  ));
