// @flow
import * as React from 'react';
import ChoiceTab from '../ChoiceTab';

import './styles.scss';
import { FormContext } from '../../contexts/FormContext';

type Theme = {
  [string]: string,
};
type YesOrNoType = {
  theme?: Theme,
  handleScroll?: () => any,
  order?: Number,
};
export const YesOrNo = ({ theme, handleScroll, order }: YesOrNoType) => {
  const [checkOn, setCheckOn] = React.useState({ yes: false, no: false });
  const { dispatch } = React.useContext(FormContext);

  const firstUpdate = React.useRef(true);
  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    }
    // dispatch({
    //   type: 'ADD__ANSWER',
    //   payload: { order, value: [checkOn.no ? 'No' : 'Yes'] },
    // });
  }, [checkOn, dispatch, order]);
  const handleToggleYes = () => {
    setCheckOn({ ...checkOn, yes: !checkOn.yes, no: checkOn.yes && false });
    if (handleScroll) {
      handleScroll();
    }
  };
  const handleToggleNo = () => {
    setCheckOn({ ...checkOn, no: !checkOn.no, yes: checkOn.yes && false });
    if (handleScroll) {
      handleScroll();
    }
  };

  return (
    <div className="yesorno">
      <ChoiceTab
        handleToggle={handleToggleYes}
        checked={checkOn.yes}
        theme={theme}
        letter="Y"
        text="Yes"
      />
      <ChoiceTab
        handleToggle={handleToggleNo}
        checked={checkOn.no}
        theme={theme}
        letter="N"
        text="No"
      />
    </div>
  );
};

export default YesOrNo;
