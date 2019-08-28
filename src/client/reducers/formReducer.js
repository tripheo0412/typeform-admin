// @flow
import { Types } from './actionTypes';

type Question = {
  order?: number,
  questionType?: string,
  title?: string,
  description?: string,
  image?: string,
  video?: string,
  choices?: Array<any>,
};
type Form = {
  data: {
    templateId: string,
    shortId?: Object,
    questions: Array<Question>,
    responses: any,
    font: string,
    questionColor: string,
    answerColor: string,
    buttonColor: string,
    backgroundColor: string,
    backgroundImage: string,
  },
};

export const initialState: Form = {
  data: {
    templateId: '5d4d5c0ac21ff700072ad85f',
    shortId: '/HqhrfB2a0',
    questions: [
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'fieldset',
        variant: 'email',
        title: 'What is your Email?',
        order: 1,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'tel',
        variant: '',
        title: 'What is your number?',
        order: 2,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'fieldset',
        variant: 'shottext',
        title: 'Short text?',
        order: 3,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'fieldset',
        variant: 'longtext',
        title: 'Long text',
        order: 4,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'yesorno',
        variant: '',
        title: 'Yes Or No?',
        order: 5,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'fieldset',
        variant: 'date',
        title: 'Date',
        order: 6,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'choicebox',
        variant: '',
        title: 'Choice Box',
        order: 7,
        choices: ['React', 'Redux', 'Javascript'],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'picture',
        variant: '',
        title: 'Picture choice',
        order: 8,
        choices: [
          {
            text: 'pic 1',
            value:
              'https://images.typeform.com/images/fegzN68s2EZg/image/default',
          },
          {
            text: 'pic 2',
            value:
              'https://images.typeform.com/images/fegzN68s2EZg/image/default',
          },
        ],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'dropdown',
        variant: '',
        title: 'Drop Down',
        order: 9,
        choices: [
          'option 1',
          'option 2',
          'option 3',
          'select 1',
          'select 2',
          'select 3',
        ],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'opinion',
        variant: '',
        title: 'Opinion scale',
        order: 10,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'rates',
        variant: '',
        title: 'rates',
        steps: 5,
        order: 11,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'upload',
        variant: '',
        title: 'File upload',
        order: 12,
        choices: [],
      },
      {
        isRequired: false,
        _id: '5d4d5c0ac21ff700072ad860',
        questionType: 'fieldset',
        variant: 'website',
        title: 'Website',
        order: 13,
        choices: [],
      },
    ],
    responses: [],
    font: 'Open Sans',
    questionColor: '#3D3D3D',
    answerColor: '#4FB0AE',
    buttonColor: '#4FB0AE',
    backgroundColor: '#FFFFFF',
    backgroundImage: '',
  },
};

type Action = { +type: 'ADD__ANSWER', payload: any };

export const reducer = (state: Form = initialState, action: Action) => {
  const { responses } = state.data;
  let question;
  console.log('action: ', action.payload, state);
  switch (action.type) {
    case Types.ADD__ANSWER:
      question = state.data.responses.find(
        q => q.order === action.payload.order
      );
      if (!question) {
        return {
          ...state,
          data: { ...state.data, responses: responses.concat(action.payload) },
        };
      }
      return {
        ...state,
        data: {
          ...state.data,
          responses: responses.map(q =>
            q.order !== action.payload.order ? q : action.payload
          ),
        },
      };
    case Types.SET_FORM:
      console.log(action.payload.data);
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
