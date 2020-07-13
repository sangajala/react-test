import React from 'react';
import ReactDOM from 'react-dom';
import DataScreen from './DataScreen';
import App from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const setUp = () => {
  const component = shallow(<App/>);
  return component;
};


describe('Header Component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
      });


      it('Should render container element', () => {

            const elem = component.find('Container');
            expect(elem.length).toBe(1);
          });


           it('Should render DataScreen element', () => {

                      const elem = component.find('DataScreen');
                      expect(elem.length).toBe(1);
                    });

           it('Should render DataScreen element with page number tests', () => {
                                 const dataScreen = shallow(<DataScreen pageNumber={5} readResults={400}/>);
                                 const elem = dataScreen.find('tr');
                                 expect(elem.length).toBe(1);
                               });






  });


