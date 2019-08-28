// @flow
import * as React from 'react';
import classname from 'classnames';
import { hexToRgbA } from '../../helper';
import QuestionLabel from '../QuestionLabel';
import Fieldset from '../Fieldset';
import Dropdown from '../Dropdown';
import YesOrNo from '../YesOrNo';
import PictureChoice from '../PictureChoice';
import FileUpload from '../FileUpload';
import OpinionScale from '../OpinionScale';
import ChoiceBox from '../ChoiceBox';
import Rates from '../Rates';
import Button from '../Button';
import TelephoneInput from '../TelephoneInput';
import ProgressBar from '../ProgressBar';
// import { FormContext } from '../../contexts/FormContext';
import './styles.scss';

type Theme = {
  [string]: string,
};

type Props = {
  data: Object,
  isPreview?: boolean,
};
export const QuestionForm = ({ data, isPreview = false }: Props) => {
  const baseStyles = classname({
    base__root: true,
    'base__root--preview': isPreview,
  });
  const {
    answerColor,
    questionColor,
    backgroundColor,
    buttonColor,
  } = data.theme;
  const theme: Theme = {
    '--main-color': answerColor,
    '--light-color': hexToRgbA(answerColor, 0.8),
    '--lighten-color': hexToRgbA(answerColor, 0.6),
    '--lightenest-color': hexToRgbA(answerColor, 0.2),
    '--dark-color': hexToRgbA(answerColor),
    '--question-color': questionColor,
    '--button-color': buttonColor,
    '--btnlight-color': hexToRgbA(buttonColor, 0.8),
    '--background-color': backgroundColor,
  };
  const [current, setCurrent] = React.useState(0);
  // const [questions, setQuestion] = React.useState(data.template.questions);
  // const { state, formService } = React.useContext(FormContext);
  // React.useEffect(() => {
  // const fetchFormData = () => {
  //   formService.get(location.pathname);
  // };
  // fetchFormData();
  // }, [formService]);
  // const { questions } = data.template;
  // const sortQuestion = questions.sort((a, b) => a.order - b.order);
  // console.log(sortQuestion);

  const [sortQuestions, setSortQuestions] = React.useState(
    data.template.questions.sort((a, b) => a.order - b.order)
  );

  React.useEffect(
    () =>
      setSortQuestions(
        data.template.questions.sort((a, b) => a.order - b.order)
      ),
    [data]
  );

  const handleSubmit = () => {
    // formService.update(state.data, location.pathname);
    // setQuestion([]);
  };

  const handleScroll = order => () => {
    const el = document.getElementById(`${Number(order) + 1}`);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView();
        setCurrent(order);
      }, 1000);
    }
  };

  return (
    <div className="wrapper__screen">
      <div className={baseStyles}>
        <div className="question__wrapper" style={theme}>
          <div className="question__form">
            <main>
              {sortQuestions.map(question => (
                <div className="question__main" key={question.order}>
                  <section
                    id={`${question.order}`}
                    className="content__wrapperr"
                  >
                    <QuestionLabel
                      theme={theme}
                      counter={question.order}
                      label={question.title}
                      handleScroll={handleScroll(question.order)}
                    >
                      {question.questionType === 'fieldset' && (
                        <>
                          <Fieldset
                            handleScroll={handleScroll(question.order)}
                            variant={question.variant}
                            type={question.variant === 'date' ? 'date' : 'text'}
                            name={question.variant}
                            theme={theme}
                            order={question.order}
                          />
                          <div className="submit__wrapper">
                            <Button
                              text="OK"
                              theme={theme}
                              handleClick={handleScroll(question.order)}
                            />
                          </div>
                        </>
                      )}
                      {question.questionType === 'yesorno' && (
                        <YesOrNo
                          handleScroll={handleScroll(question.order)}
                          theme={theme}
                          order={question.order}
                        />
                      )}
                      {question.questionType === 'tel' && (
                        <>
                          <TelephoneInput
                            handleScroll={handleScroll(question.order)}
                            order={question.order}
                            theme={theme}
                          />
                          <div className="submit__wrapper">
                            <Button
                              text="OK"
                              theme={theme}
                              handleClick={handleScroll(question.order)}
                            />
                          </div>
                        </>
                      )}
                      {question.questionType === 'dropdown' && (
                        <Dropdown
                          handleScroll={handleScroll(question.order)}
                          options={question.choices}
                          theme={theme}
                          order={question.order}
                        />
                      )}
                      {question.questionType === 'picture' && (
                        <>
                          <PictureChoice
                            handleScroll={handleScroll(question.order)}
                            theme={theme}
                            text={question.text}
                            pictures={question.choices}
                            order={question.order}
                          />
                          <div className="submit__wrapper">
                            <Button
                              text="OK"
                              theme={theme}
                              handleClick={handleScroll(question.order)}
                            />
                          </div>
                        </>
                      )}
                      {question.questionType === 'opinion' && (
                        <OpinionScale
                          handleScroll={handleScroll(question.order)}
                          theme={theme}
                          order={question.order}
                        />
                      )}
                      {question.questionType === 'rates' && (
                        <Rates
                          handleScroll={handleScroll(question.order)}
                          steps={question.steps}
                          order={question.order}
                          theme={theme}
                        />
                      )}
                      {question.questionType === 'choicebox' && (
                        <>
                          <ChoiceBox
                            choices={question.choices}
                            theme={theme}
                            order={question.order}
                          />
                          <div className="submit__wrapper">
                            <Button
                              text="OK"
                              theme={theme}
                              handleClick={handleScroll(question.order)}
                            />
                          </div>
                        </>
                      )}
                      {question.questionType === 'upload' && (
                        <>
                          <FileUpload theme={theme} />
                          <div className="submit__wrapper">
                            <Button
                              text="OK"
                              theme={theme}
                              handleClick={handleScroll(question.order)}
                            />
                          </div>
                        </>
                      )}
                    </QuestionLabel>
                  </section>
                </div>
              ))}
            </main>
            <section
              className="question__submit"
              id={`${sortQuestions.length + 1}`}
            >
              <div className="content__wrapper">
                <div className="submit__content">
                  <Button
                    text="Submit"
                    theme={theme}
                    handleClick={handleSubmit}
                  />
                  <div className="submit__text">Never submit passwords!</div>
                </div>
              </div>
            </section>
          </div>
          {/* <div className="footer"> */}
          <ProgressBar
            currentQuestion={current}
            totalQuestions={sortQuestions.length}
            theme={theme}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
