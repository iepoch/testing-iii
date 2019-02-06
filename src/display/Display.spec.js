// Test away!
import React from "react";
import Display from './Display'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe('should display the gate', () => {

    it('should render the display', () => {
        render(<Display />);
    })

    //Validate that the display can be unlocked and opened
    it('should display open and unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        const open = getByText(/open/i);
        const locked = getByText(/locked/i);
        expect(open).toHaveClass('green-led');
        expect(locked).toHaveClass('green-led');
    })



    // Validate that you can close and leave unlocked
    it('should display closed and unlocked', () => {
        const { getByText } = render(<Display closed={true} locked={false} />);
        const closed = getByText(/closed/i);
        const unlocked = getByText(/locked/i);
        expect(closed).toHaveClass('red-led');
        expect(unlocked).toHaveClass('green-led')

    })

    //Validate that it will display locked and closed
    it('should display locked and closed', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        const closed = getByText(/closed/i);
        const locked = getByText(/locked/i);
        expect(closed).toHaveClass('red-led');
        expect(locked).toHaveClass('red-led');
    })


})