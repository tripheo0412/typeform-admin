import * as React from 'react';
import { shallow } from 'enzyme';
import { PictureChoice } from '..';

it('renders PictureChoice without crashing ', () => {
  shallow(
    <PictureChoice
      pictures={[
        {
          text: 'pic 1',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
      ]}
    />
  );
});
