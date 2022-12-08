import {render,screen} from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
// import {getByTestId,debug} from '@testing-library/jest-dom'
import App from '../app';
import {} from '../components/main.component'


jest.mock("../components/main.component",()=>{
    return{
        Main:()=><div data-testid="book-list">Testing Main Component</div>
    }
})

test("when user is in index route(/)",()=>{
    window.history.pushState({},"","/");

    render(<App/>)

    // screen.debug();

    screen.getByTestId("book-list")

});