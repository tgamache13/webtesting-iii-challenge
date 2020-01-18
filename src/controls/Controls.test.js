import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

describe("Controls test rendering", () => {
    test('matches snapshot', () => {
        const shot = renderer.create(<Controls />);
        expect(shot.toJSON()).toMatchSnapshot();
    });

    test('buttons rendering', () => {
        const {getByText} = render(<Controls />);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

    test('buttons render unlock and open if gate is locked and closed', () => {
        const {getByText} = render(<Controls locked={true} closed={true} />);
        getByText(/unlock gate/i);
        getByText(/open gate/i);
    });

    test('buttons renders close and lock if unlocked and open', () => {
        const {getByText} = render(<Controls unlocked={true} open={true}/>);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

    test('close toggle is disabled when gate is unlocked', () => {
        const {getByText} = render(<Controls closed={true} locked={true} />);
        expect(getByText(/open gate/i)).toHaveAttribute('disabled');
    });

    test('locked toggle is disabled when gate is open', () => {
        const {getByText} = render(<Controls open={true} unlocked={true}/>);
        expect(getByText(/lock gate/i)).toHaveAttribute('disabled');
    })
})