// @flow
import React, { useState } from 'react';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import './styles.scss';

type InputFields = {
  password: string,
  rePassword: string,
};

export const ResetPasswordPage = () => {
  const [state, setState] = useState<InputFields>({
    password: '',
    rePassword: '',
  });

  const { password, rePassword } = state;

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { id, value } = e.target;
    setState({
      ...state,
      [id]: value,
    });
  };

  const handleResetPassword = () => {
    alert('DB cahnge password function called in backend');
  };

  return (
    <div className="resetpassword">
      <span className="resetpassword__logo">LOGO</span>
      <div className="resetpassword__form">
        <div className="form__title">Please enter your new password!</div>
        <form className="form__inputs">
          <InputField
            type="password"
            id="password"
            labelText="New password"
            variant="primary"
            placeholder="At least 6 characters"
            value={password}
            handleChange={handleChange}
            isRequired
          />
          <InputField
            type="password"
            id="rePassword"
            labelText="Re-enter new password"
            variant="primary"
            placeholder="At least 6 characters"
            value={rePassword}
            handleChange={handleChange}
            isRequired
          />
          <div className="resetpassword__button">
            <Button
              label="Change password"
              variant="secondary"
              size="lg"
              onClick={handleResetPassword}
              disabled={password === '' || password !== rePassword}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
