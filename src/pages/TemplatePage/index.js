/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  Fragment,
} from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import Toolbar from '../../components/Toolbar';
import Button from '../../components/Button';
import AddQuestion from '../../components/AddQuestion';
import Navbar from '../../components/Navbar';
import Question from '../../components/Question';
import PreviewPanel from '../../components/PreviewPanel';
import QuestionSetting from '../../components/QuestionSetting';
import QuestionTypes from '../../components/QuestionTypes';
import TabPanel from '../../components/TabPanel';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';
import EmailNotification from '../../components/EmailNotification';
import './styles.scss';
import { DataContext } from '../../contexts/DataContext';
import DesignPanel from '../../components/DesignPanel';

type TemplatePageProps = {
  match: Object,
  location: Object,
  history: Object,
  user: Object,
};

const testtemplate = {
  templateId: '5d4d5c0ac21ff700072ad85f',
  shortId: '/HqhrfB2a0',
  questions: [
    {
      isRequired: false,
      _id: '1',
      questionType: 'fieldset',
      variant: 'email',
      title: 'What is your Email?',
      order: 1,
      choices: [],
    },
    {
      isRequired: false,
      _id: '2',
      questionType: 'tel',
      variant: '',
      title: 'What is your number?',
      order: 2,
      choices: [],
    },
    {
      isRequired: false,
      _id: '3',
      questionType: 'fieldset',
      variant: 'shottext',
      title: 'Short text?',
      order: 3,
      choices: [],
    },
    {
      isRequired: false,
      _id: '4',
      questionType: 'fieldset',
      variant: 'longtext',
      title: 'Long text',
      order: 4,
      choices: [],
    },
    {
      isRequired: false,
      _id: '5',
      questionType: 'yesorno',
      variant: '',
      title: 'Yes Or No?',
      order: 5,
      choices: [],
    },
    {
      isRequired: false,
      _id: '6',
      questionType: 'fieldset',
      variant: 'date',
      title: 'Date',
      order: 6,
      choices: [],
    },
    {
      isRequired: false,
      _id: '7',
      questionType: 'choicebox',
      variant: '',
      title: 'Choice Box',
      order: 7,
      choices: ['React', 'Redux', 'Javascript'],
    },
    {
      isRequired: false,
      _id: '8',
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
      _id: '9',
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
      _id: '10',
      questionType: 'opinion',
      variant: '',
      title: 'Opinion scale',
      order: 10,
      choices: [],
    },
    {
      isRequired: false,
      _id: '11',
      questionType: 'rates',
      variant: '',
      title: 'rates',
      steps: 5,
      order: 11,
      choices: [],
    },
    {
      isRequired: false,
      _id: '12',
      questionType: 'upload',
      variant: '',
      title: 'File upload',
      order: 12,
      choices: [],
    },
    {
      isRequired: false,
      _id: '13',
      questionType: 'fieldset',
      variant: 'website',
      title: 'Website',
      order: 13,
      choices: [],
    },
  ],
  responses: [],
};

const TemplatePage = ({
  match,
  history,
  location,
  user,
}: TemplatePageProps) => {
  const { dataService } = useContext(DataContext);
  const addQuestionEl = useRef(null);
  const [template, setTemplate] = useState(testtemplate);
  const [showQuestionSetting, setShowQuestionSetting] = useState(false);
  const [showQuestionTypes, setShowQuestionTypes] = useState(false);
  const [tabPanelItem, setTabPanelItem] = useState({});
  const toolbarContainerStyles = classnames({
    template__toolbar: true,
    'template__toolbar--settings': showQuestionSetting,
  });
  const previewQuestionsStyles = classnames({
    template__preview: true,
    'template__preview--settings': showQuestionSetting,
  });
  const templateQuestionsStyles = classnames({
    template__questions: true,
    'template__questions--settings': showQuestionSetting,
  });
  const questionTemplate = template.questions.map(question => ({
    _id: question._id,
    isRequired: question.isRequired,
    order: question.order,
    label: question.title,
    type:
      question.questionType === 'fieldset'
        ? question.variant
        : question.questionType,
    choices: question.choices,
    isMultiplechoice:
      question.questionType === 'choicebox' ||
      question.questionType === 'dropdown',
  }));

  const testtheme = {
    isPublic: false,
    font: 'Open Sans',
    questionColor: '#3D3D3D',
    answerColor: '#4FB0AE',
    buttonColor: '#4FB0AE',
    backgroundColor: '#34ff23',
    _id: '13',
    name: 'User theme 1',
    createdAt: '2019-07-25T09:02:07.982Z',
    updatedAt: '2019-07-25T09:02:07.982Z',
  };
  const [theme, setTheme] = useState(testtheme);

  // useEffect(() => {
  //   // api call Types.UPDATE_TEMPLATE
  // }, [template.emailNotification]);

  // useEffect(() => {
  //   const fetchTemplate = async id => {
  //     console.log('Template');
  //     let templateItem = {};
  //     await dataService.getTemplate(id).then(res => {
  //       templateItem = res.data;
  //     });
  //     await dataService.getTemplateTheme(id).then(res => {
  //       templateItem.theme = res.data;
  //     });
  //     setTemplate(templateItem);
  //   };
  //   if (!location.state) {
  //     const { id } = match.params;
  //     fetchTemplate(id);
  //   } else {
  //     setTemplate(location.state.template);
  //   }
  // }, []);

  const options = [
    { value: 'email', title: 'Email' },
    { value: 'tel', title: 'Telephone' },
    { value: 'shottext', title: 'Short Text' },
    { value: 'longtext', title: 'Long Text' },
    { value: 'yesorno', title: 'Yes/No Question' },
    { value: 'date', title: 'Date' },
    { value: 'choicebox', title: 'Multiple Choice' },
    { value: 'picture', title: 'Picture Choice' },
    { value: 'dropdown', title: 'Drop Down' },
    { value: 'opinion', title: 'Opinion scale' },
    { value: 'rates', title: 'Rates' },
    { value: 'upload', title: 'File upload' },
    { value: 'website', title: 'Website' },
  ];

  const handleShowQuestionSetting = questionId => {
    setShowQuestionSetting(true);
    const questionsArray = _.cloneDeep(template.questions);
    const currentQuestion = {
      ...questionsArray.filter(question => question._id === questionId)[0],
    };
    setTabPanelItem({
      id: currentQuestion._id,
      type:
        currentQuestion.questionType === 'fieldset'
          ? currentQuestion.variant
          : currentQuestion.questionType,
      required: currentQuestion.isRequired,
    });
  };

  const onSelectQuestionTypeHandler = (e: { target: HTMLInputElement }) => {
    const questionsArray = _.cloneDeep(template.questions);

    const currentQuestion = {
      ...questionsArray.find(question => question._id === tabPanelItem.id),
    };
    switch (e.target.value) {
      case 'longtext':
      case 'shottext':
      case 'email':
      case 'date':
      case 'website':
        currentQuestion.questionType = 'fieldset';
        currentQuestion.variant = e.target.value;
        break;
      default:
        currentQuestion.questionType = e.target.value;
        currentQuestion.variant = '';
        break;
    }
    const currentQuestionIndex = questionsArray.findIndex(
      question => question._id === currentQuestion._id
    );
    questionsArray.splice(currentQuestionIndex, 1, currentQuestion);
    setTabPanelItem({
      ...tabPanelItem,
      type:
        currentQuestion.questionType === 'fieldset'
          ? currentQuestion.variant
          : currentQuestion.questionType,
    });
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };
  const handleCloseQuestionSetting = () => {
    setShowQuestionSetting(false);
  };
  // const handleEmailNotification = (
  //   isEnable: boolean,
  //   receiver: Array<string>,
  //   subject: string
  // ) => {
  //   setTemplate({
  //     emailNotification: {
  //       isEnable,
  //       receiver,
  //       subject,
  //     },
  //   });
  // };
  useOnClickOutside(addQuestionEl, () => setShowQuestionTypes(false));

  const addQuestionHelper = (
    title,
    index,
    questionsArray = _.cloneDeep(template.questions)
  ) => {
    const counter = index + 1;
    let newQuestion: {
      isRequired: boolean,
      _id: string,
      questionType: string,
      variant: string,
      title: string,
      order: number,
      choices: Array<any>,
    } = {
      isRequired: false,
      _id: counter.toString(),
      questionType: title,
      variant: '',
      title: '',
      order: counter,
      choices: [],
    };
    switch (title) {
      case 'email':
      case 'shottext':
      case 'longtext':
      case 'date':
      case 'website':
        newQuestion.questionType = 'fieldset';
        newQuestion.variant = title;
        break;
      case 'duplicate':
        newQuestion = questionsArray.find(
          question => question.order === counter
        );
        break;
      default:
        break;
    }
    return {
      newQuestion,
      counter,
    };
  };

  const addQuestionHandler = (e: { target: HTMLInputElement }) => {
    const { newQuestion } = addQuestionHelper(
      e.target.title,
      template.questions.length
    );
    setTemplate({
      ...template,
      questions: [...template.questions, newQuestion],
    });
  };

  const addQuestionAtIndexHandler = (
    e: { target: HTMLElement },
    isDuplicate: boolean,
    index
  ) => {
    let newQuestion;
    let counter;
    if (e) {
      ({ newQuestion, counter } = addQuestionHelper(e.target.title, index));
    }
    if (isDuplicate)
      ({ newQuestion, counter } = addQuestionHelper('duplicate', index));

    const updatedQuestions = _.cloneDeep(template.questions).map(question => {
      if (question.order >= counter) question.order += 1;
      return question;
    });
    updatedQuestions.splice(index, 0, newQuestion);

    setTemplate({
      ...template,
      questions: updatedQuestions,
    });
  };

  const deleteQuestionHandler = (e: { target: HTMLInputElement }, index) => {
    const updatedQuestions = _.cloneDeep(template.questions).map(question => {
      if (question.order >= index + 1) question.order -= 1;
      return question;
    });
    updatedQuestions.splice(index, 1);

    setTemplate({
      ...template,
      questions: updatedQuestions,
    });
  };

  const stripHTML = htmlString => {
    const tmp = document.createElement('div');
    tmp.innerHTML = htmlString;
    return tmp.textContent;
  };

  const onTextChangeHandler = (event: { target: HTMLInputElement }, index) => {
    const questionsArray = _.cloneDeep(template.questions);
    questionsArray[index].title = stripHTML(event.target.value);
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };

  const onChoiceChangeHandler = (
    event: { target: HTMLInputElement },
    index,
    id
  ) => {
    const questionsArray = _.cloneDeep(template.questions);
    questionsArray.filter(question => question._id === id)[0].choices[index] =
      event.target.value;
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };

  const onAddChoiceHandler = (event, index, id) => {
    const questionsArray = _.cloneDeep(template.questions);
    const addChoice = [
      ...template.questions.filter(question => question._id === id)[0].choices,
    ];
    if (event.key === 'Enter') {
      addChoice.splice(index + 1, 0, '');
    }
    questionsArray.filter(
      question => question._id === id
    )[0].choices = addChoice;
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };
  const onPictureChoiceChangeHandler = (
    event: { target: HTMLInputElement },
    index,
    id
  ) => {
    const questionsArray = _.cloneDeep(template.questions);
    questionsArray.filter(question => question._id === id)[0].choices[
      index
    ].text = event.target.value;
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };

  const onAddPictureChoiceHandler = (event, index, id) => {
    const questionsArray = _.cloneDeep(template.questions);
    const addPictureChoice = [
      ...template.questions.filter(question => question._id === id)[0].choices,
    ];
    if (event.key === 'Enter') {
      addPictureChoice.splice(index + 1, 0, { text: '', value: '' });
    }
    questionsArray.filter(
      question => question._id === id
    )[0].choices = addPictureChoice;
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };

  const handleAddPicture = (index, id, pictureURL) => {
    const questionsArray = _.cloneDeep(template.questions);
    const questionPictureChoices = [
      ...questionsArray.filter(question => question._id === id)[0].choices,
    ];
    questionPictureChoices[index].value = pictureURL;
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };

  const openWidget = (e, index, id) => {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dle2mzjmi',
        uploadPreset: 'ynt5vgo4',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          handleAddPicture(index, id, result.info.secure_url);
        } else {
          console.log(error);
        }
      }
    );
  };

  const onPictureButtonClickHandler = (event, index, id) => {
    const questionsArray = _.cloneDeep(template.questions);
    if (
      questionsArray.filter(question => question._id === id)[0].choices
        .length === 0
    ) {
      questionsArray.forEach(question => {
        if (question.questionType === 'picture' && question._id === id) {
          question.choices.push({ text: '', value: '' });
        }
      });
    }
    const questionPictureChoices = questionsArray
      .filter(question => question._id === id)[0]
      .choices.slice();
    if (questionPictureChoices[index].value === '') {
      openWidget(event, index, id);
    } else {
      questionPictureChoices[index].value = '';
    }
    setTemplate({
      ...template,
      questions: questionsArray,
    });
  };

  let questionKey = 0;
  const questions = questionTemplate.map((q, i) => {
    const question = (
      <Question
        _id={q._id}
        isRequired={q.isRequired}
        key={questionKey}
        type={q.type}
        label={q.label}
        choices={q.choices}
        order={q.order}
        showQuestionSetting={handleShowQuestionSetting}
        onAddChoiceHandler={onAddChoiceHandler}
        onTextChangeHandler={e => onTextChangeHandler(e, i)}
        onChoiceChangeHandler={onChoiceChangeHandler}
        onPictureChoiceChangeHandler={onPictureChoiceChangeHandler}
        onAddPictureChoiceHandler={onAddPictureChoiceHandler}
        onDuplicateQuestionHandler={e => addQuestionAtIndexHandler(e, true, i)}
        onDeleteQuestionHandler={e => deleteQuestionHandler(e, i)}
        isMultiplechoice={q.isMultiplechoice}
        onAddQuestionHandler={e => addQuestionAtIndexHandler(e, false, q.order)}
        onPictureButtonClickHandler={onPictureButtonClickHandler}
      />
    );
    questionKey += 1;
    return question;
  });

  return (
    <Fragment>
      <Navbar
        match={match}
        history={history}
        location={location}
        user={user}
      ></Navbar>
      <div className="template__main">
        <div className={toolbarContainerStyles}>
          <Toolbar handleWorkspaceClick={() => {}} variant="theme">
            <div className="template__container">
              <QuestionSetting
                isShow={showQuestionSetting}
                closeQuestionSetting={handleCloseQuestionSetting}
              >
                <TabPanel
                  label=""
                  handleClick={onSelectQuestionTypeHandler}
                  title="Question Types"
                  type="select"
                  options={options}
                  initialValue={tabPanelItem.type}
                />
                <TabPanel
                  label=""
                  options={[]}
                  handleClick={() => {}}
                  title="Required"
                  type="control"
                  isEnable={tabPanelItem.required}
                />
              </QuestionSetting>
              <div className={templateQuestionsStyles}>
                {questions}
                <div ref={addQuestionEl} className="template__button--add">
                  <AddQuestion
                    label="Add new question"
                    handleToggle={() => setShowQuestionTypes(true)}
                  />
                  <QuestionTypes
                    isOpen={showQuestionTypes}
                    handleType={addQuestionHandler}
                  />
                </div>
              </div>
              <div className="template__button--add-mobile">
                <Button
                  variant="addquestion"
                  size="md"
                  label="+ Add a question"
                  onClick={() => {}}
                />
              </div>
            </div>
            <DesignPanel currentTheme={theme} setCurrentTheme={setTheme} />
            <EmailNotification handleEmailNotification={() => {}} />
          </Toolbar>
        </div>

        <div className={previewQuestionsStyles}>
          <PreviewPanel template={template} theme={theme} />
        </div>
      </div>
    </Fragment>
  );
};

export default TemplatePage;
