import React from 'react';
import { shallow } from 'enzyme';
import { CardButton, AddNewCardButton } from '..';

describe('Card Button Test', () => {
  it('renders Theme without crashing', () => {
    shallow(<CardButton link="/" />);
  });
  it('renders Template without crashing', () => {
    shallow(<AddNewCardButton link="/" />);
  });
  it('should render correctly default template', () => {
    const component = shallow(<CardButton link="/" />);
    expect(component).toMatchSnapshot();
  });
  it('should render card text correctly with responses', () => {
    const component = shallow(
      <CardButton
        isTemplate
        history={{ push: () => {} }}
        templateService={{ remove: () => {} }}
        link="/"
        template={{
          id: 1,
          name: 'My Template',
          forms: [{ responses: [[]] }],
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render card text correctly without responses', () => {
    const component = shallow(
      <CardButton
        isTemplate
        history={{ push: () => {} }}
        templateService={{ remove: () => {} }}
        link="/"
        template={{ id: 2, name: 'My Template', forms: [{ responses: [] }] }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render Question card correctly', () => {
    const component = shallow(
      <CardButton
        isTemplate
        history={{ push: () => {} }}
        templateService={{ remove: () => {} }}
        link="/"
        template={{ id: 2, name: 'My Template', forms: [{ responses: [] }] }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
