// @flow
import React, { useEffect, useState } from 'react';
import { QuestionForm } from '../../client/components/QuestionForm';

// import './styles.scss';

type Props = {
  template: Object,
  theme: Object,
};

const PreviewPanel = ({ template, theme }: Props) => {
  const [data, setData] = useState({ theme, template });

  useEffect(() => {
    setData({ theme, template });
  }, [template, theme]);

  // const data = {
  //   theme,
  //   template,
  // };

  return (
    // <div className="preview__panel" style={{width: '100%'}}>

    <QuestionForm isPreview data={data} />
  );
};

export default PreviewPanel;
