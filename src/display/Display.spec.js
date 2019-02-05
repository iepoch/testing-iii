// Test away!
import React from "react";
import Display from './Display'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'



describe('should display the gate', () => {

    it('should render the display', () => {
        const div = document.createElement("div");
        render(<Display />, div);
    })


})