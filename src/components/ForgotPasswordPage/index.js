// @flow
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Button } from '../Button';
import Inputfield from '../InputField';
import './styles.scss';

const ForgotPasswordPage = ({ emailAddress }: { emailAddress: string }) => {
  const { userService } = useContext(UserContext);
  const [value, setValue] = React.useState(emailAddress);
  const [message, setMessage] = React.useState(null);

  const handleChange = (e: { target: HTMLInputElement }) =>
    setValue(e.target.value);
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    userService.resetPassword({ email: value });
    setMessage(
      `Email sent to ${value}. Please follow the email instruction to reset your password`
    );
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };
  return (
    <div className="container">
      {message && (
        <div className="forgotpassword__message--success">{message}</div>
      )}
      <h3>reset your password</h3>
      <p>Please enter your email to reset your password.</p>
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
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
