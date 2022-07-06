import React from 'react';
import { render, clearup, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

const { asFragment } = render(<About />);

describe('About component', () => {
    //first test
    it('renders', () => {
        render(<About />);
    });
    //second test
    it('matches snapshot DOM node structure', () => {
        expect(asFragment()).toMatchSnapshot();
        //render About
    });
})

afterEach(cleanup);