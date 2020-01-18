import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe('Display rendering', () => {
    test('matches snapshot', () => {
        const shot = renderer.create(<Display/>);
        expect(shot.toJSON()).toMatchSnapshot();
    });

    test('Closed is displayed if true', () => {
        const {queryByText} = render(<Display closed={true}/>);
        queryByText(/Closed/i);
    });

    test('Locked displayed if locked', () => {
        const {queryByText} = render(<Display locked={true}/>);
        queryByText(/Locked/i);
    });

    test('Open displayed when false', () => {
        const {queryByText} = render(<Display closed={false}/>);
        queryByText(/Open/i);
    });

    test('Unlocked displayed if false', () => {
        const {queryByText} = render(<Display locked={false}/>);
        queryByText(/Unlocked/i);
    });

    test('red-led class is used when locked', () => {
        const {getByText} = render(<Display locked={true}/>);
        expect(getByText(/locked/i).classList.contains('red-led')).toBe(true);
    });

    test('red-led class is used when closed', () => {
        const {getByText} = render(<Display closed={true}/>);
        expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
    });

    test('green-led class is used when unlocked', () => {
        const {getByText} = render(<Display locked={false}/>);
        expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
    });

    test('green-led class list is used when open', () => {
        const {getByText} = render(<Display closed={false}/>);
        expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
    });
})