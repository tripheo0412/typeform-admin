// @flow
import * as React from 'react';
import Toolbar from '../../components/Toolbar';
import Button from '../../components/Button';
import AddQuestion from '../../components/AddQuestion';
import QuestionSetting from '../../components/QuestionSetting';
import Question from '../../components/Question';
import QuestionTypes from '../../components/QuestionTypes';
import { useOnClickOutside } from '../../custom-hooks/useOnClickOutside';
import Navbar from '../../components/Navbar';
import './styles.scss';

const TemplatePage = () => {
  const addQuestionEl = React.useRef(null);
  const [showQuestionSetting, setShowQuestionSetting] = React.useState(false);
  const [showQuestionTypes, setShowQuestionTypes] = React.useState(false);
  const handleShowQuestionSetting = () => {
    setShowQuestionSetting(true);
  };
  const handleCloseQuestionSetting = () => {
    setShowQuestionSetting(false);
  };
  useOnClickOutside(addQuestionEl, () => setShowQuestionTypes(false));
  return (
    <React.Fragment>
      <Navbar />
      <Toolbar handleWorkspaceClick={() => {}} variant="theme">
        <div className="template__container">
          <QuestionSetting
            isShow={showQuestionSetting}
            closeQuestionSetting={handleCloseQuestionSetting}
          />
          <div className="template__questions">
            <Question
              showQuestionSetting={handleShowQuestionSetting}
              hasDescription
            />
            <Question showQuestionSetting={handleShowQuestionSetting} />
            <div ref={addQuestionEl} className="template__button--add">
              <AddQuestion
                label="Add new question"
                handleToggle={() => setShowQuestionTypes(true)}
              />
              <QuestionTypes isOpen={showQuestionTypes} handleType={() => {}} />
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
      </Toolbar>
    </React.Fragment>
  );
};

export default TemplatePage;
