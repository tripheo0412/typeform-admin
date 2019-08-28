import React from 'react';
import { shallow } from 'enzyme';
import { CardButton, AddNewCardButton } from '..';

describe('Card Button Test', () => {
  it('renders Theme without crashing', () => {
    shallow(<CardButton />);
  });
  it('renders Template without crashing', () => {
    shallow(<AddNewCardButton />);
  });
  it('should render correctly default template', () => {
    const component = shallow(<CardButton />);
    expect(component).toMatchSnapshot();
  });
  it('should render card text correctly with responses', () => {
    const component = shallow(
      <CardButton
        isTemplate
        history={{ push: () => {} }}
        dataService={{ remove: () => {} }}
        template={{
          id: 1,
          name: 'My Template',
          forms: [{ responses: [[]] }],
          theme: {
            font: 'Open Sans',
            questionColor: '#3D3D3D',
            answerColor: '#4FB0AE',
            backgroundColor: '#FFFFFF',
            buttonColor: '#4FB0AE',
            name: 'New theme',
          },
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
        dataService={{ remove: () => {} }}
        template={{
          id: 2,
          name: 'My Template',
          forms: [{ responses: [] }],
          theme: {
            font: 'Open Sans',
            questionColor: '#3D3D3D',
            answerColor: '#4FB0AE',
            backgroundColor: '#FFFFFF',
            buttonColor: '#4FB0AE',
            name: 'New theme',
          },
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it('should render Question card correctly', () => {
    const component = shallow(
      <CardButton
        isTemplate
        history={{ push: () => {} }}
        dataService={{ remove: () => {} }}
        template={{
          id: 2,
          name: 'My Template',
          forms: [{ responses: [] }],
          theme: {
            font: 'Open Sans',
            questionColor: '#3D3D3D',
            answerColor: '#4FB0AE',
            backgroundColor: '#FFFFFF',
            buttonColor: '#4FB0AE',
            name: 'New theme',
          },
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
