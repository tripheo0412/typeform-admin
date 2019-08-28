// @flow
import * as React from 'react';
import './styles.scss';

type Theme = {
  [string]: string,
};
type FileUploadType = {
  theme?: Theme,
};

export const FileUpload = ({ theme }: FileUploadType) => {
  const fileInput = React.useRef();

  const triggerInputFile = () => {
    if (fileInput.current) fileInput.current.click();
  };
  /*    TODO 
     implement drag and drop function and screen overlay */
  return (
    <div
      className="fileupload"
      style={theme}
      role="button"
      onClick={triggerInputFile}
      tabIndex={0}
      onKeyPress={() => {}}
    >
      <div className="fileupload--icon"></div>
      <div>
        <div className="fileupload__text">Choose file </div>
        or drag here
      </div>
      Size limit: 10MB
      <input type="file" className="fileupload__input" ref={fileInput} />
    </div>
  );
};

export default FileUpload;
