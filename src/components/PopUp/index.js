// @flow
import * as React from 'react';

import InputField from '../InputField';
import Button from '../Button';

import './styles.scss';

type ButtonSubmit = 'save' | 'delete' | 'edit' | 'ok' | 'create workspace';

type Props = {
  title?: string,
  isSearch?: boolean,
  searchResults?: string[],
  buttonSubmit?: ButtonSubmit,
  handleSubmit: any => void,
  handleCancel?: () => void,
};

const modalInputProps = {
  id: '',
  labelText: '',
  type: 'text',
  placeholder: '',
  value: '',
  variant: 'template',
  isSignin: false,
};

export const PopUp = ({
  title,
  isSearch,
  searchResults,
  handleSubmit,
  buttonSubmit,
  handleCancel,
}: Props) => {
  const [isClose, setIsClose] = React.useState(true);
  const [state, setState] = React.useState('');

  const getVariant = value => {
    switch (value) {
      case 'ok' || 'edit' || 'save' || 'create workspace':
        return 'primary';

      case 'delete':
        return 'danger';

      case 'duplicate':
        return 'duplicate';

      default:
        return 'primary';
    }
  };

  const getLabel = value => {
    switch (value) {
      case 'ok':
        return 'ok';

      case 'edit':
        return 'edit';

      case 'save':
        return 'save';

      case 'delete':
        return 'delete';

      case 'create workspace':
        return 'create workspace';

      default:
        return '';
    }
  };

  const handleClose = () => setIsClose(!isClose);

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { value } = e.target;
    setState(value);
  };

  return (
    <>
      {isSearch ? (
        <div className="modal modal__search">
          {' '}
          <div className="modal__search">
            <div className="modal__search--input">
              <InputField
                {...modalInputProps}
                variant="search"
                placeholder="Find a workspace or template"
                handleChange={handleChange}
              />
            </div>
            <div className="modal__search--results">
              {searchResults && searchResults.length > 0 && (
                <div className="modal__search--results--panel">
                  <span className="modal__search--results--panel--header">
                    WORKSPACES
                  </span>
                  {searchResults.map(s => (
                    <div className="modal__search--results--panel--item">
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        isClose && (
          <div className="modal">
            <div className="modal__wrapper">
              <button
                type="submit"
                className="modal__wrapper--close-btn"
                onClick={handleClose}
              >
                &times;
              </button>
              <div className="modal__wrapper--header">
                <span>
                  <b>{title}</b>
                </span>
              </div>
              <br />
              <div className="modal__wrapper--content">
                <InputField
                  {...modalInputProps}
                  variant="template"
                  handleChange={handleChange}
                />
              </div>
              <br />
              <div className="modal__wrapper--footer--buttons">
                <Button
                  variant={getVariant(buttonSubmit)}
                  size="sm"
                  label={getLabel(buttonSubmit)}
                  theme="dark"
                  onClick={() => handleSubmit(state)}
                />
                <Button
                  variant="secondary"
                  size="sm"
                  label="Cancel"
                  onClick={handleCancel}
                />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default PopUp;
