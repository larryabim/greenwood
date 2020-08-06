import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

import React from 'react';
import {cleanup} from '@testing-library/react';
import App from "./App";

configure({ adapter: new Adapter() });

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('App Component Test', function () {
    it('renders without crashing', () => {
      shallow(<App />);
    });
  })

