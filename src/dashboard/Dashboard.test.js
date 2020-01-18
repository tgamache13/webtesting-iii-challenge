import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe ('Dashboard rendering', () => {
    test('matches snapshot', () => {
        const shot = renderer.create(<Dashboard/>);
        expect(shot.toJSON()).toMatchSnapshot();
    });

    test('dashboard renders', () => {
        const {getByText} = render(<Dashboard/>);
        getByText(/unlocked/i);
        getByText(/open/i);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

})