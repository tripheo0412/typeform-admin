// @flow
import React, { useState, Fragment } from 'react';
import TabPanel from '../TabPanel';
import EmailInput from './components/ChipInput';
import InputField from '../InputField';
import Button from '../Button';
import './styles.scss';

type emailHeader = {
  receiver: Array<string>,
  subject: string,
  isEnable: boolean,
};
type Props = {
  handleEmailNotification: (
    isEnable: boolean,
    receiver: Array<string>,
    subject: string
  ) => void,
};

export const EmailNotification = ({ handleEmailNotification }: Props) => {
  const [emailData, setEmailData] = useState<emailHeader>({
    receiver: [],
    subject: '',
    isEnable: false,
  });
  const [showContent, setShowContent] = useState(false);

  const emailIsValid = email => /\S+@\S+\.\S+/.test(email);

  const toggleEmailNotification = () => {
    setShowContent(!showContent);
  };

  const subjectChangeHandler = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setEmailData({
      ...emailData,
      subject: value,
    });
  };

  const handleAddEmail = email => {
    const emails = [...emailData.receiver];
    if (emailIsValid(email)) {
      emails.push(email);
    }
    setEmailData({
      ...emailData,
      receiver: emails,
    });
  };

  const handleDeleteEmail = (email, index) => {
    const emails = [...emailData.receiver];
    emails.splice(index, 1);
    setEmailData({
      ...emailData,
      receiver: emails,
    });
  };

  return (
    <div className="emailNotification__container">
      <div className="emailNotification__header">
        <p className="emailNotification__title">Email Notifications</p>
        <button
          onClick={() => {}}
          type="button"
          className="emailNotification__button emailNotification__button--close"
        ></button>
      </div>
      <div className="emailNotification__toggle">
        <TabPanel
          label=""
          options={[]}
          type="control"
          title="Get an email when someone complete your forms"
          handleClick={toggleEmailNotification}
        />
      </div>
      {showContent && (
        <Fragment>
          <div className="emailNotification__emails">
            <p>Send a notification to</p>
            <EmailInput
              value={emailData.receiver}
              onAdd={email => handleAddEmail(email)}
              onDelete={(email, index) => handleDeleteEmail(email, index)}
            />
          </div>
          <div className="emailNotification__subject">
            <p>Subject</p>
            <InputField
              id="subject"
              type="text"
              value={emailData.subject}
              variant="primary"
              handleChange={subjectChangeHandler}
            />
          </div>
          <div className="emailNotification__save">
            <Button
              variant="primary"
              size="sm"
              label="Save"
              onClick={() => {
                handleEmailNotification(
                  emailData.isEnable,
                  emailData.receiver,
                  emailData.subject
                );
              }}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default EmailNotification;
