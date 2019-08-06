// @flow
import React, { useContext } from 'react';
import { Button } from '../Button';
import { UserContext } from '../../contexts/UserContext';
import Inputfield from '../InputField';
import './styles.scss';

export const VerificationPage = ({
  emailAddress,
}: {
  emailAddress: string,
}) => {
  const { userService } = useContext(UserContext);
  const [value, setValue] = React.useState(emailAddress);
  const [message, setMessage] = React.useState(null);

  const handleChange = (e: { target: HTMLInputElement }) =>
    setValue(e.target.value);
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    userService.sendAccountVerifyEmail({ email: value });
    setMessage(`Email sent to ${value}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };
  return (
    <div className="container">
      {message && (
        <div className="verification__message--success">{message}</div>
      )}
      <h3>verify your email address</h3>
      <p>
        We now need to verify your email address. We've sent an email to your
        email address to verify your address. Please click the link in that
        email to continue.
      </p>
      <form onSubmit={handleSubmit}>
        <Inputfield
          id="email"
          type="email"
          handleChange={handleChange}
          variant="primary"
          value={value}
          isRequired
        />
        <Button
          type="submit"
          variant="primary"
          label="Resend Email"
          size="sm"
        />
      </form>
    </div>
  );
};

export default VerificationPage;
